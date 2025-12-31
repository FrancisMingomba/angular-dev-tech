import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, RouterLinkWithHref,Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { AuthService } from '../services/auth-service';
import { UpperCasePipe } from '@angular/common';

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
    MatListModule,
    UpperCasePipe
  ],
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
    icon: 'view_headline',
    label: 'Paterns and Practices',
    route: 'paterns'
  },
    {
    icon: 'book',
    label: 'Training',
    route: 'training'
  }
]

logoutItem: any[] = [
  {
    icon: 'logout',
    label: 'Logout',
    route: 'logout'
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



public get greeting(): string {
  const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';  
  }

  }

}
