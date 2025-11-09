import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatError } from "@angular/material/input";

@Component({
  selector: 'app-form-example',
  imports: [MatFormField, MatLabel, MatError],
  templateUrl: './form-example.html',
  styleUrl: './form-example.css',
})
export class FormExample implements OnInit{
  myForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
      // Perform further actions like sending data to a backend
    } else {
      console.log('Form is invalid.');
      // Optionally, mark all fields as touched to display errors
      this.myForm.markAllAsTouched();
    }
  }

  // Helper getters for easier access in the template
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }


}
