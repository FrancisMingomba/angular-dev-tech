import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-change-password',
  imports: [ ReactiveFormsModule, RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css',
})
export class ChangePassword {
 
   oldPassword = new FormControl('', [Validators.required, Validators.email]);
   newPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
   confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
   

  errorMessage = signal('');

  constructor() {
    merge(this.oldPassword.statusChanges, this.oldPassword.valueChanges,
       this.newPassword.statusChanges, this.newPassword.valueChanges,
       this.confirmPassword.statusChanges, this.confirmPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.oldPassword.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.oldPassword.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
