import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, RouterLinkWithHref } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';





@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatSidenavContainer, MatSidenav, MatSidenavContent, MatNavList, MatListItem, RouterLinkWithHref],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

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
    route: 'logout'
  }


]



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
