import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-password',
  imports: [RouterOutlet, FormsModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './change-password.html',
  styleUrl: './change-password.css',
})
export class ChangePassword {

}
