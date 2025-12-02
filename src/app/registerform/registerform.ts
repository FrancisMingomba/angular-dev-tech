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
import { UserStore } from '../store/user-store';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-registerform',
  imports: [RouterOutlet,
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatIcon,
    MatInputModule,
    FormsModule
  ],
    
  templateUrl: './registerform.html',
  styleUrl: './registerform.css',
})
export class Registerform {
//-----------------------------------------------------------------
    hidePassword = true; // Initialize to true for hidden password
     // Example for reactive forms
  passwordForm = new FormGroup({
    password: new FormControl('', Validators.required),
//----------------------------------------------------------    
  });
updateErrorMessage() {
throw new Error('Method not implemented.');
}

   name = new FormControl('', [Validators.required]);
   email = new FormControl('', [Validators.required, Validators.email]);
   password = new FormControl('', [Validators.required, Validators.minLength(6)]);
   confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
   

  errorMessage = signal('');
  merge: any;

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges,
       this.name.statusChanges, this.name.valueChanges,
       this.password.statusChanges, this.password.valueChanges,
       this.confirmPassword.statusChanges, this.confirmPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this. emailErrorMessage()),{

      };
  }

  emailErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid value');
    } else {
      this.errorMessage.set('Password Missmatch X');
    }
  }
  


  onSubmit() {
    if (this.password.value !== this.confirmPassword.value) {
      this.errorMessage.set('Passwords do not match');
    } else {
      this.errorMessage.set('Registration successful!');
      // Here you can handle the form submission, e.g., send data to the server
    }
  }
   
  userStore = new UserStore();
  save() {
    let formVues = {
      id: '',
      name: this.name.value || '',
      email: this.email.value || '',
      password: this.password.value || ''
     };
     console.log(formVues);
     this.userStore.addUser(formVues);

     this.clearForm();



    /*
    let user =  this.userStore.users().find(u => u.email === this.email.value);
    if(user){
      this.errorMessage.set('User with this email already exists');
    } else {
      const newUser = {
        id: '',
        name: this.name.value || '',
        email: this.email.value || '',
        password: this.password.value || ''
      };
      this.userStore.addUser(newUser);
      this.errorMessage.set('User registered successfully');
    }
      */
  }

  clearForm() {
    this.name.reset();
    this.email.reset();
    this.password.reset();
    this.confirmPassword.reset();
  }
}
