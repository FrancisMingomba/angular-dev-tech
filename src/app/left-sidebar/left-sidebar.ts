import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-left-sidebar',
  imports: [MatInputModule, RouterOutlet,RouterModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})
export class LeftSidebar {
  
    constructor(private auhtSercice: AuthService) { }
  
    items = [
  
        {
      routerLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Products'
     },
        {
      routerLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages'
     },
        {
      routerLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings'
     },
        {
      routerLink: 'logout',
      icon: 'fal fa-cog',
      label: 'Logout'
     },
    ];
  
  
}
