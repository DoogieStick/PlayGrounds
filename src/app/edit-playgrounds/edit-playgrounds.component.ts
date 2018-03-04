import { Component, OnInit } from '@angular/core';
import { Playground } from 'app/playground/playground';
import { PlaygroundService } from 'app/playground.service';

declare var document : any;

@Component({
  selector: 'app-edit-playgrounds',
  templateUrl: './edit-playgrounds.component.html',
  styleUrls: ['./edit-playgrounds.component.css']
})
export class EditPlaygroundsComponent implements OnInit {

  ngOnInit() {
    document.getElementById("editForm").scrollIntoView();   
  }

}
