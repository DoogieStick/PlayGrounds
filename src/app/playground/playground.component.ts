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
    
  playground : Playground = {
    id: 1,
    name: 'Windstorm',
    description : 'just it',
    address : 'some address',
    locality : 'some location',
    state : 'some state',
    country : 'Colombia'
  };  
    
  constructor() { }

  ngOnInit() {
  }

}
