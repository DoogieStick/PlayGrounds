import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PlaygroundService } from './playground.service';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    
    playgrounds: Playground[];
    home = 'Playgrounds';
    visible: boolean = true;
    breakpoint: number = 768;
    
    constructor(private playgroundService : PlaygroundService) {}

    ngOnInit() {
      this.getPlaygrounds();
      if(screen.width < 768){this.visible = false;}
      this.getMaxPlayground(this.playgrounds);
    }
    
    getPlaygrounds() {
        this.playgroundService.getPlaygroundsFromData()
        .then(result => {
            this.playgrounds = result;
        })
    } 
    
    deletePlayground(id) {
     this.playgroundService.deletePlayground(id);
    }

    getMaxPlayground(playgrounds2){
      //console.log(this.playgrounds);
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