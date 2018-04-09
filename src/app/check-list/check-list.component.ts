import { Component, OnInit } from '@angular/core';

declare var document : any;

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
    
export class CheckListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      document.getElementsByTagName("app-playground")[0].style.display = "none";
  }

}
