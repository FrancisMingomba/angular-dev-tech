import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { merge } from 'rxjs';
import { routes } from '../app.routes';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /*
  router = inject(Router);
  onLogin(){
    if(this.loginObj.email == 'user' && this.loginObj.password =='123') {
      this.router.navigateByUrl("/dashboard");
      localStorage.setItem("token", '3333333');
    } else {
      alert("Wrong CredentielsX");
    }
  }
    */
http = inject(HttpClient);
  onLogin(){
    debugger;
    const formValue = this.loginForm.value;
    this.http.post("https://angularbackend-production.up.railway.app/auth/login", formValue).subscribe({
      next:(response:any)=>{
        debugger;
        if(response.result) {
          alert('Login Success')
        } else {
          alert("Seccess");
        }
      },
      error:(error)=>{
        debugger;
        alert("ErrorX")
      }
    })

  }
}
