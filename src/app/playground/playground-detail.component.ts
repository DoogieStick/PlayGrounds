import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playground } from './playground';
import { PlaygroundService } from 'app/playground/playground.service';

@Component({
  selector: 'app-playground-detail',
  templateUrl: './playground-detail.component.html',
  styleUrls: ['./playground-detail.component.css']
})
export class PlaygroundDetailComponent implements OnInit {

      id: number;
    private sub: any;
    playground : Playground;
    newPlayground : any = [];

    constructor(private route: ActivatedRoute, private playgroundService : PlaygroundService){}
    
  ngOnInit() {
    var elements = Array.from(document.querySelectorAll("br"));
      elements.forEach(function(element) {
        element.parentNode.removeChild(element);
      });
      
       this.sub = this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.playground = this.playgroundService.getPlaygroundToEdit(this.id);
      });
  }

}
