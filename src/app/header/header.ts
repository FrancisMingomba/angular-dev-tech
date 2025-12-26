import { Component } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
