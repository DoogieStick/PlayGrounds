import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';

declare var document : any;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    
    home = 'Playgrounds';
    
    showAddPlaygroundForm(){
        console.info("it works");    
    }
    
    playgrounds : Playground[] = [];
    
  constructor() { }

  ngOnInit() {
  }

}
