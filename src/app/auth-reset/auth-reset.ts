import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-reset',
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './auth-reset.html',
  styleUrl: './auth-reset.css',
})
export class AuthReset {

}
