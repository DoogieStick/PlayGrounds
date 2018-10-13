import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  client = {
    "user": "",
    "password": ""
  };

  auth = {
    "status": 0,
    "desc":""
  }

  ngOnInit() {
  }

  login(client) {
        this.loginService.loginUser(client)
        .then(result => {
          this.auth = result;
          if(this.auth.status == 0){
            console.info("User Authenticated: ", this.auth);
          }else{
            console.info("User Anauthenticated: ", this.auth);
          }
        });
    }

}
