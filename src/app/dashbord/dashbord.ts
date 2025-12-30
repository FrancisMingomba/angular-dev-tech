import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-dashbord',
  imports: [RouterOutlet, RouterLink, MatInputModule ],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {
 public user:any = [];

 public fullName: string = "";


 ngOnInit(){
  
 }


 selectedToken = localStorage.getItem('token');


 constructor(private authService: AuthService, private router: Router){}

 
   logout() {
    //localStorage.removeItem('token');
    this.authService.logout();
    this.router.navigateByUrl('/dashboard');
    this.selectedToken = null;
  }
  


}
