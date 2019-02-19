import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { CheckList } from './check-list';
import { CheckListService } from './check-list.service';
import { ModalComponent } from '../modal/modal.component';

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


 constructor(private checkListService: CheckListService
							, private modal : ModalComponent) { }  

 
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
		
    deleteCheckList(id) {
    	var modal = this.modal.openModalAlert("Exclusion" , "Confirm exclusion of this checkList?",this.checkListService);
        modal.then(function(value) {
           if(value.cod === 1){
            value.controller.deleteCheckList(id);
           }
        });
    }		
  
}