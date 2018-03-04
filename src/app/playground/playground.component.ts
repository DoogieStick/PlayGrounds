import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PLAYGROUNDS_ON_LOAD } from './playground-data';

declare var document : any;
declare var console : any;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    
    home = 'Playgrounds';
    playsOnload = PLAYGROUNDS_ON_LOAD;
    
    playgrounds : Playground[] = this.playsOnload;
    
    showAddPlaygroundForm(){
        console.info("it works");    
    }
    
    deletePlayground(id) {
        this.playsOnload.splice(this.playsOnload.indexOf(id), 1);
      }
    
  constructor() { }

  ngOnInit() {
  }

}
