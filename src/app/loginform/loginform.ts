import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { merge } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-loginform',
  imports: [     ReactiveFormsModule, RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, RouterLink, MatIconModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {

     http = inject(HttpClient);
     router = inject(Router);
     selectAuthService = inject(AuthService);
     isButtonDisabled = true;

     email = new FormControl('', [Validators.required, Validators.email]);
     password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
    errorMessage = signal('');
    authService: any;
  
    constructor(authService: AuthService) {
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

    onLogin() {
      this.http.post("https://angularbackend-production.up.railway.app/auth/login",merge).subscribe({
        next:(response:any) => {
          debugger;
          if(response.result) {
          //  alert("Login Success");
          //  this.router.navigateByUrl("/dashboard")
          let returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/dashboard';
          localStorage.setItem("token", response.data.token);
          this.router.navigateByUrl(returnUrl);
          } else {
              alert(response.message)
          }
        },
        error:(error) => {
          debugger;
          alert(error.statusText)
        }
      })
    }


    
    loginUserWithQueryParam(){
    debugger;
    const formValue = { email: this.email.value, password: this.password.value };
    this.http.post("https://angularbackend-production.up.railway.app/auth/login", formValue).subscribe({
      next:(response:any)=>{
        debugger;
        if(response && response.token){
        //  alert('Login Success')
        let returnUrl = this.router.routerState.root.firstChild?.snapshot.queryParamMap.get('returnUrl') || '/leftsidenavbar';
        this.router.navigateByUrl([returnUrl || '/dashboard'] as any);
          localStorage.setItem("token", response.token);
          //this.router.navigateByUrl("/dashboard")
        
        } else {
          //alert("Seccess")
            this.router.navigateByUrl("/dashboard")
        }
      },
      error:(error)=>{
        debugger;
      //  alert("ErrorXYZ")
      }
    });

  }


  newLog() {
    debugger;
     const formValue = { email: this.email.value, password: this.password.value };
    this.http.post("https://angularbackend-production.up.railway.app/auth/login", formValue).subscribe((res: any) => {
      if(res.result) {
        alert("Login success");
        localStorage.setItem("token", res.data.token);
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Wrong dataZ")
      }
    })
  }

   //this one
    loginUser(){
    debugger;
    const formValue = { email: this.email.value, password: this.password.value };
    this.http.post("https://angularbackend-production.up.railway.app/auth/login", formValue).subscribe({
      next:(response:any)=>{
        debugger;
        if(response && response.token){
        //  alert('Login Success')
          localStorage.setItem("token", response.token);
          this.router.navigateByUrl("/sidebar")
        
        } else {
          //alert("Seccess")
            this.router.navigateByUrl("/sidebar")
        }
      },
      error:(error)=>{
        debugger;
      //  alert("ErrorXYZ")
      }
    });

  }



  isButtonDisable: boolean = true;
  

}
