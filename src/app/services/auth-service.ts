import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
loginUser() {
throw new Error('Method not implemented.');
}
  jwtHelper: any;

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

  isLoggedIn() {
    return tokenNotExpired();
  }
  
}
function tokenNotExpired() {
  throw new Error('Function not implemented.');
}

