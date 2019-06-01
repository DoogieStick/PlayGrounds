import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckList } from './check-list';
import { CheckListService } from './check-list.service';
import { ModalComponent } from '../modal/modal.component';
import { Router} from '@angular/router';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

declare var document : any;

@Component({
  selector: 'app-check-list-unit',
  templateUrl: './check-list-unit.component.html',
  styleUrls: ['./check-list-unit.component.css']
})
export class CheckListUnitComponent implements OnInit {

  id: number;
  editQuestions: boolean;
  private sub: any;
  checkList: CheckList;
  newCheckList: any = [];
  newQuestion: any = [];

  constructor(private checkListService : CheckListService,
    private route: ActivatedRoute, private router : Router, private modal : ModalComponent){}
   
  ngOnInit() {
    this.editQuestions = false;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.checkList = this.checkListService.getCheckListToEdit(this.id);
    });
  }


  editCheckListQuestions(){      
    {if (this.editQuestions == true)      
      {this.editQuestions = false;}
    else {this.editQuestions = true;}}
  }


  deleteCheckListQuestions(id) {
    var modal = this.modal.openModalAlert("Exclusion" , "Confirm exclusion of this question?",this.checkListService);
      modal.then(function(value) {
         if(value.cod === 1){
          value.controller.deleteCheckList(id);
         }
      });
  }	

  /*addOrEditQuestions(id){
    if(this.checkList.questionList){
      this.checkList.questionList.push(this.questionList
        .filter(questionListFiltered => questionListFiltered.id === id)[0])
    }else{
      this.checkList.questionList = [];
      this.checkList.questionList.push(this.questionList
        .filter(questionListFiltered => questionListFiltered.id === id)[0])
    }
    
    console.info("checkLists" , this.checkList);
    this.checkListService.addOrEditCheckList(this.checkList,"edit");
  }*/

  editCheckListQuestion(){
    this.newCheckList.id = document.getElementsByName("id")[0].value;
    this.newCheckList.name = document.getElementsByName("name")[0].value;
    this.newCheckList.questionList = document.getElementsByName("questionList")[0].value;
    this.checkListService.addOrEditCheckList(this.newCheckList,"edit");
    this.newCheckList = [];
}


}
