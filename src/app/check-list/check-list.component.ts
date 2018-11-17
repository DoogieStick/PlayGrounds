import { Component, OnInit } from '@angular/core';
import { CheckList } from './check-list';
import { CheckListService } from './check-list.service';

declare var document : any;
declare var console : any;


@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
    
export class CheckListComponent implements OnInit {

	checkLists: CheckList[];
	visible: boolean = true;
	breakpoint: number = 768;


 constructor(private checkListService: CheckListService) { }  

 
	  ngOnInit() {
		  this.getCheckLists();
		  if(screen.width < 768){this.visible = false;}  
	  }

  
	 getCheckLists() {
		this.checkListService.getCheckListsFromData()
		.then(result => {
			this.checkLists = result.Items;
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