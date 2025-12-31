import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-logout',
  imports: [  MatButtonModule],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
constructor(private authService: AuthService, private router: Router) {}


   

title = 'angular-sidenav';

menuItems: any[] = [
  {
    icon: 'logout',
    label: 'Logout X',
    route: 'home'
  },

]


logout() {
  localStorage.removeItem('token');
  this.router.navigate(['dashboard']);
}

}
