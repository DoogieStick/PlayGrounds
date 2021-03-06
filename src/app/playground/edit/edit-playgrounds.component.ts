import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playground } from '../playground';
import { PlaygroundService } from 'app/playground/playground.service';

declare var document : any;

@Component({
  selector: 'app-edit-playgrounds',
  templateUrl: './edit-playgrounds.component.html'
})
export class EditPlaygroundsComponent implements OnInit {
 
    id: number;
    private sub: any;
    playground : Playground;
    newPlayground : any = [];

    constructor(private route: ActivatedRoute, private playgroundService : PlaygroundService){}
    
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.playgroundService.getPlaygroundToEdit(this.id)
         .then((play) => this.playground = play);
      });
    }
     
    editPlayground(){
        this.newPlayground.id = document.getElementsByName("id")[0].value;
        this.newPlayground.name = document.getElementsByName("name")[0].value;
        this.newPlayground.description = document.getElementsByName("description")[0].value;
        this.newPlayground.address = document.getElementsByName("address")[0].value;
        this.newPlayground.locality = document.getElementsByName("locality")[0].value;
        this.newPlayground.state = document.getElementsByName("state")[0].value;
        this.newPlayground.country = document.getElementsByName("country")[0].value;
        this.playgroundService.addOrEditPlayground(this.newPlayground,"edit");
        this.newPlayground = [];
    }
    
    focusOnPlayground(){
        
        if(screen.width < 768){
            var element = document.getElementById("playground"+this.id);
        }else{
            var element = document.getElementById("playground"+this.id);
        }
        element.scrollIntoView();     
    }
    
}
