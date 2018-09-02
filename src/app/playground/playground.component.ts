import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PlaygroundService } from './playground.service';


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
    visible: boolean = true;
    breakpoint: number = 768;
    
    constructor(private playgroundService : PlaygroundService) { 
        
    }

    ngOnInit() {
      this.getPlaygrounds();
      if(screen.width < 768){this.visible = false;}  
    }
    
    getPlaygrounds() {
        this.playgroundService.getPlaygroundsFromData()
        .then(result => {
            this.playgrounds = result.Items;
        });
    }
    
    deletePlayground(id) {
     this.playgroundService.deletePlayground(id);
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
