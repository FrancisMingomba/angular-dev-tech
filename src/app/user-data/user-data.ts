import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Getuser } from '../services/getuser';
import { User } from '../interface/user';
import { ThisReceiver } from '@angular/compiler';
/*
interface Post {
  name: string;
  email: string;
  password: string;
}
  */

@Component({
  selector: 'app-user-data',
  imports: [RouterOutlet],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData {

  apiData: User[] = [];

constructor(private crud: Getuser) {}

  getAllUsers() {
    this.crud.getData().subscribe( item => {
      this.apiData = item;
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

}
