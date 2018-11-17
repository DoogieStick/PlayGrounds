import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private loginService : LoginService, 
    private router : Router, private modal : ModalComponent,
    private authService : AuthService){}
  

  client = {
    "user": "",
    "password": ""
  };

  auth = {
    "status": 0,
    "desc":""
  }

  ngOnInit() {
    document.getElementsByTagName("app-nav-bar")[0].setAttribute("style", "display:none;");
  }

  login(client) {
        this.loginService.loginUser(client)
        .then(result => {
          this.auth = result;
          if(this.auth.status == 0){
            this.authService.sendToken(client.user);  
            document.getElementsByTagName("app-nav-bar")[0].setAttribute("style", "display:block;");
            this.router.navigateByUrl('/playgrounds');
          }else{
            this.modal.openModal("Login" , "Wrong login credentials.");
          }
        });
    } 
}