import { Component, OnInit } from '@angular/core';

declare var document : any;

@Component({
  selector: 'app-editar-playgrounds',
  templateUrl: './editar-playgrounds.component.html',
  styleUrls: ['./editar-playgrounds.component.css']
})
export class EditarPlaygroundsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("editForm").scrollIntoView();   
  }

}
