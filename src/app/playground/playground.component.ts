import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import './playground.js';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  
    home = 'Playgrounds';    
    
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
