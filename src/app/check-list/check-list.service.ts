import { CheckList } from './check-list';
import { CHECKLISTS_ON_LOAD } from './check-list-data';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Rx';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

declare var document: any;

@Injectable()
export class CheckListService {
  
    constructor(private http: Http, private router : Router) {}

    private values: Array<CheckList> = [];
    private anyErrors: boolean;
    private finished: boolean;
    public checkLists: any = [];
	public checkListsLength = 0;
	public checkListsOnload= CHECKLISTS_ON_LOAD;
    public url = 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/playgrounds';       

	
	    getCheckListsFromData(): Promise<any> {
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg',
        'tableName':'Checklists','quantity': 500}) });
		return this.http.get(this.url, options)
			   .map(response => response.json()).subscribe(result => {
                this.checkListsOnload = result.Items,
                document.getElementById('dim').style.display = "none",
                resolve(result);
            });
       });

    } 

    getCheckListToEdit(id) {
        for (const entry of this.checkListsOnload) {
            if (id === entry.id) {
                return entry;
            }
        }
    }

    deleteCheckList(id) {
        document.getElementById('dim').style.display = 'block';
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg','tableName':'Checklists','quantity': 500}) });

        var checkLists = {'id':parseInt(id)};

        return this.http.post(this.url , checkLists, options).map(response => response.json()).subscribe(result => {
            document.getElementById('dim').style.display = 'none';
            document.location.reload();
            resolve(result);
        });
      });
    } 


    addOrEditCheckList(checklist,method) {

        document.getElementById('dim').style.display = "block";
      
      return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg','tableName':'Checklists','quantity': 500}) });
        let id = method === "add" ? this.checkListsLength + 1 : parseInt(checklist.id);

        var checkLists = {
            "id":id,
            "name":checklist.name,
            "questionList": checklist.questionList
        };

        return this.http.put(this.url , checkLists, options).map(response => response.json()).subscribe(result => {
            document.getElementById('dim').style.display = "none";
            document.location.reload();
            resolve(result);
        });
      });
    }


}
