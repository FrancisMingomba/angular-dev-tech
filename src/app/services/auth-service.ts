import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private userPayload: any;

  private fullName$ = new BehaviorSubject<string>("");
  jwtHelper: any;

  constructor(private http: HttpClient, private router: Router){
    this.userPayload = this.decodeToken();
  }

  public getFullName() {
    return this.fullName$.asObservable();
  }
  public setFullName(fullName: string) {
    this.fullName$.next(fullName);
  }

  logout() {
    localStorage.removeItem('token');
  }
  /*
  isLoggedIn() {
    //return tokenNotExpired();
    
    /* let jwtHelper = new JwtHelperService();
     let token = localStorage.getItem('token');
    if (!token)
      return false;
     let expirationDate = jwtHelper.getTokenExpirationDate(token);
     let isExpired = jwtHelper.isTokenExpired(token);

    console.log("Expiration" , expirationDate);
    console.log("isExpiration", isExpired);

    return !isExpired; // returns true if token valid
    
  }
  */
  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    
    return new this.jwtHelper().token.DecodeToken(token);
  }

 // isLoggedIn() {
   // return tokenNotExpired();
 // }
  




getToken(){
  return localStorage.getItem('token')
}

decodeToken(){
  const jwtHelper = new JwtHelperService()
  const token = this.getToken()!;
  return jwtHelper.decodeToken(token);
}

getfullNameFromToken(){
  if(this.userPayload)
    return this.userPayload.name;
}


}

