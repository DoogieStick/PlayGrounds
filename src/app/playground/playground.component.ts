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
    private playsOnload = PLAYGROUNDS_ON_LOAD;
    
    playgrounds : Playground[] = this.playsOnload.splice(1,this.playsOnload.length);
    
    showAddPlaygroundForm(){
        console.info("it works");    
    }
    
    deletePlayground(){
        console.info("it works");    
    }
    
  constructor() { }

  ngOnInit() {
  }

}
