import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {

  private baseUrl = 'https://angularbackend-production.up.railway.app';
  http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>(this.baseUrl + '/users/getAllUsers');
  }
  addUser(user: User) {
    return this.http.post<User>(this.baseUrl + '/users/register', user);
  }

  upDate(user: User) {
    return this.http.put(this.baseUrl + '/users/' + user.id, user);
  }
  
  deleteUser(user: User) {
    return this.http.delete(this.baseUrl + '/users/' + user.id);
  }
}
