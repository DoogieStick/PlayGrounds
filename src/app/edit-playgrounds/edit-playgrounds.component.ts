import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var document : any;

@Component({
  selector: 'app-edit-playgrounds',
  templateUrl: './edit-playgrounds.component.html',
  styleUrls: ['./edit-playgrounds.component.css']
})
export class EditPlaygroundsComponent implements OnInit {
        
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
