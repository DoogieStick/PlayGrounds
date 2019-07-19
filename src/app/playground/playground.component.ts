import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PlaygroundService } from './playground.service';
import { ModalComponent } from '../modal/modal.component';
import {Router} from '@angular/router';

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
    
    constructor(private playgroundService : PlaygroundService,
                        private router : Router, private modal : ModalComponent) {}

    ngOnInit() {
      this.getPlaygrounds();
      if(screen.width < 768){this.visible = false;}
    }
    
    getPlaygrounds() {
        this.playgroundService.getPlaygroundsFromData()
        .then(result => {
            this.playgrounds = result;
            document.getElementById('dim').style.display = "none";
            console.info("Playgrounds: " , this.playgrounds);
        })
    } 
    
    deletePlayground(id) {
    	var modal = this.modal.openModalAlert("Exclusion" , "Confirm exclusion of this playground?",this.playgroundService);
        modal.then(function(value) {
           if(value.cod === 1){
            value.controller.deletePlayground(id);
           }
        });
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