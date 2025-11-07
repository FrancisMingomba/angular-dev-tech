import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-loginform',
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, RouterLink, MatIconModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {

}
