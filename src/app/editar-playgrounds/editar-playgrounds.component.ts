import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var document : any;

@Component({
  selector: 'app-editar-playgrounds',
  templateUrl: './editar-playgrounds.component.html',
  styleUrls: ['./editar-playgrounds.component.css']
})
export class EditarPlaygroundsComponent implements OnInit {
        
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });
    document.getElementById("editForm").scrollIntoView();   
  }

}
