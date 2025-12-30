import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, RouterLinkWithHref,Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth-service';






@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet,
     MatToolbarModule,
     MatIconModule,
     MatSidenavContainer,
     MatSidenav,
     MatSidenavContent,
     MatNavList,
     MatListItem,
     RouterLinkWithHref,
    MatListModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  constructor(public authService: AuthService, private router:Router) {}
   

title = 'angular-sidenav';

menuItems: any[] = [
  {
    icon: 'home',
    label: 'Home',
    route: 'home'
  },
    {
    icon: 'handshake',
    label: 'Paterns and Practices',
    route: 'paterns'
  },
    {
    icon: 'book',
    label: 'Training',
    route: 'training'
  },
    {
    icon: 'logout',
    label: 'Logout',
    route: "logout",
  }
]

logout() {
  localStorage.removeItem('token');
    this.router.navigate(["dashboard"]);

}


currentUser() {
  return this.authService.currentUser();
} 

 // isLoggedIn() {
   // return tokenNotExpired();
 // }

  /*
[x: string]: any;
    
    items = [
  
        {
     
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
  

*/

}


