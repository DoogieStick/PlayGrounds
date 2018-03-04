import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PlaygroundService } from 'app/playground.service';


declare var document : any;
declare var console : any;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    
    playgrounds : Playground[];
    home = 'Playgrounds';
    
    constructor(private playgroundService : PlaygroundService) { }

    ngOnInit() {
        this.getPlaygrounds();
    }
    
    getPlaygrounds() {
        this.playgrounds = this.playgroundService.getPlaygroundsFromData();
    }
    showAddPlaygroundForm(){
        console.info("it works");    
    }
    
    deletePlayground(id) {
       // this.playsOnload.splice(this.playsOnload.indexOf(id), 1);
      }

}
