import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterOutlet } from "@angular/router";
import { merge } from 'rxjs';

@Component({
  selector: 'app-loginform',
  imports: [     ReactiveFormsModule, RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, RouterLink, MatIconModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {

     email = new FormControl('', [Validators.required, Validators.email]);
     password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
    errorMessage = signal('');
  
    constructor() {
      merge(this.email.statusChanges, this.email.valueChanges,
            this.password.statusChanges, this.password.valueChanges
       )
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
