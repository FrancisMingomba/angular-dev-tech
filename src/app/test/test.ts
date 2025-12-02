import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel, MatFormField, MatError, MatInputModule } from "@angular/material/input";
import { RouterLink, RouterOutlet } from "@angular/router";
import { merge } from 'rxjs';
import { UserStore } from '../store/user-store';
import { User } from '../interface/user';

@Component({
  selector: 'app-test',
  imports: [
    RouterOutlet,
     RouterLink,
     FormsModule,
     MatFormFieldModule,
     MatInputModule,
     ReactiveFormsModule,
     CommonModule
  ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test   {
   formBuider = inject(FormBuilder);
  userForm!: FormGroup;
  userStore: UserStore ;
  selectedUser!: User | null;
  constructor() {
    this.userForm = this.formBuider.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.userStore = new UserStore();
  }
   saveUser() {
    let userData = this.userForm.value;
    console.log('User Data:', userData);
    if(this.selectedUser){
      // Update existing user
      userData.id = this.selectedUser.id;
      this.userStore.updateUser(userData);
        }else{
      this.userStore.addUser(userData);
    }
    this.clearForm(); 
   // this.userForm.reset();
  }

  clearForm() { 
    this.userForm.reset();
    this.selectedUser = null;
 }
 editUser(user: User) {
  this.userForm.patchValue(user);
  this.selectedUser = user;
 }

 deleteUser(user: User) {
  this.userStore.deleteUser(user);
 }


   saveUserX() {
    let userData = this.userForm.value;
    console.log('User Data:', userData);
    if(this.selectedUser){
      // Update existing user
      userData.id = this.selectedUser.id;
      this.userStore.updateUser(userData);
        }else{
      this.userStore.addUser(userData);
    }
    this.clearForm(); 
   // this.userForm.reset();
  }

  clearFormX() { 
    this.userForm.reset();
    this.selectedUser = null;
 }

    
}
