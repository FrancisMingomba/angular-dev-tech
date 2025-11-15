import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root',
})
export class Getuser {
   private baseUrl = 'https://angularbackend-production.up.railway.app/users/getAllUsers';

   constructor(private http: HttpClient) {}

    getData() {
      return this.http.get<User[]>(this.baseUrl);
      //return this.http.get<User[]>(this.baseUrl);
    }
}
