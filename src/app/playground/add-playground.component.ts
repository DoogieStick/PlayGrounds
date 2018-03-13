import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PlaygroundService } from 'app/playground/playground.service';

declare var document : any;

@Component({
  selector: 'add-playground',
  templateUrl: './add-playground.component.html'
})
export class AddPlaygroundComponent implements OnInit {
        
    playground : Playground;
    newPlayground : any = [];

  constructor(private playgroundService : PlaygroundService) { }

  ngOnInit() {
      document.getElementById("addForm").scrollIntoView();
  }
    
    addPlayground(){
        this.newPlayground.id = document.getElementsByName("id")[0].value;
        this.newPlayground.name = document.getElementsByName("name")[0].value;
        this.newPlayground.description = document.getElementsByName("description")[0].value;
        this.newPlayground.address = document.getElementsByName("address")[0].value;
        this.newPlayground.locality = document.getElementsByName("locality")[0].value;
        this.newPlayground.state = document.getElementsByName("state")[0].value;
        this.newPlayground.country = document.getElementsByName("country")[0].value;
        this.playgroundService.addPlayground(this.newPlayground);
        this.newPlayground = [];
        this.focusOnPlayground();
        this.hidePlayground();                
    }
    
    hidePlayground(){
       document.getElementById("addForm").style.display = "none";     
    }
    focusOnPlayground(){
        document.getElementsByTagName("app-playground")[0].scrollIntoView();
    }
}
