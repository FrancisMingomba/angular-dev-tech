import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('angulardev');
 
}
