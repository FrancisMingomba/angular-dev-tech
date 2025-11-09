import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashbord',
  imports: [RouterOutlet, RouterLink,MatInputModule],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {

  


}
