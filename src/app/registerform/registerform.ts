import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule   } from '@angular/material/button';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { PasswordValidators } from './password.validator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Component({
  selector: 'app-registerform',
  imports: [RouterOutlet,
     RouterLink,
     FormsModule,
     MatFormFieldModule,
     MatInputModule,
     ReactiveFormsModule,
     CommonModule],
    
  templateUrl: './registerform.html',
  styleUrl: './registerform.css',
})
export class Registerform {
   name = new FormControl('', [Validators.required]);
   email = new FormControl('', [Validators.required, Validators.email]);
   password = new FormControl('', [Validators.required, Validators.minLength(6)]);
   confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
   

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges,
       this.name.statusChanges, this.name.valueChanges,
       this.password.statusChanges, this.password.valueChanges,
       this.confirmPassword.statusChanges, this.confirmPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

}
