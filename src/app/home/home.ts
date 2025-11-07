import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink,MatInputModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
