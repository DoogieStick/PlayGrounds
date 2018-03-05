import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playground } from 'app/playground/playground';
import { PlaygroundService } from 'app/playground.service';

declare var document : any;

@Component({
  selector: 'app-edit-playgrounds',
  templateUrl: './edit-playgrounds.component.html',
  styleUrls: ['./edit-playgrounds.component.css']
})
export class EditPlaygroundsComponent implements OnInit {
 
    id: number;
    private sub: any;
    playground : Playground;

    constructor(private route: ActivatedRoute, private playgroundService : PlaygroundService){}
    
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['playground'];
      });
        this.playground = this.playgroundService.getPlaygroundToEdit(this.id);
        document.getElementById("editForm").scrollIntoView();   
    }

}
