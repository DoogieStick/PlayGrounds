import { Component , OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    
    constructor(private authService : AuthService) {}
    
    ngOnInit(){
        if(screen.width < 768){
            this.visible = false;
        }
    }    
    
    home = 'Playgrounds';
    visible: boolean = true;
    breakpoint: number = 768;


    logOut(){
        this.authService.logOut();
    }
    
    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    
    onResize(event) {
      const w = event.target.innerWidth;
      if (w >= this.breakpoint) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }
}
