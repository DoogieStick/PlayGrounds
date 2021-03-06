import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
        
  constructor(private router: Router) { }
    
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
    
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
    
  isLoggednIn() {
    return this.getToken() !== null;
  }
  
  logOut(){
    localStorage.removeItem("LoggedInUser");
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}