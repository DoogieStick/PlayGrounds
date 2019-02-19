import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckList } from './check-list';
import { CheckListService } from './check-list.service';

declare var document : any;

@Component({
  selector: 'app-check-list-unit',
  templateUrl: './check-list-unit.component.html',
  styleUrls: ['./check-list-unit.component.css']
})
export class CheckListUnitComponent implements OnInit {

  id: number;
  private sub: any;
  checkList: CheckList;
  newCheckList: any = [];

  constructor(private route: ActivatedRoute, private checkListService : CheckListService){}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.checkList = this.checkListService.getCheckListToEdit(this.id);
    });
  }


  editCheckList(id){
    this.newCheckList.name = document.getElementsByName("name")[0].value;
    this.newCheckList.id = id;
    this.newCheckList.questionList = this.checkList.questionList;
    console.info( "here",this.newCheckList,this.checkList)
    this.checkListService.addOrEditCheckList(this.newCheckList,"edit");
    this.newCheckList = [];
 
  }


}
