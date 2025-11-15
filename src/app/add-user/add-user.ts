import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user/user';
import { UserStore } from '../store/user-store';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  formBuider = inject(FormBuilder);
  userForm!: FormGroup;
  userStore: UserStore ;
  selectedUser!: User | null;
  constructor() {
    this.userForm = this.formBuider.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.userStore = new UserStore();
  }
  saveUser() {
    let userData = this.userForm.value;
    console.log('User Data:', userData);
    this.userStore.addUser(userData);
    console.log('Current Users in Store:', this.userStore.users());
    //this.clearForm(); 
    this.userForm.reset();
  }

  clearForm() { 
    this.userForm.reset();
    this.selectedUser = null;
 }
 editUser(user: User) {
  this.userForm.patchValue(user);
  this.selectedUser = user;

 }

}
