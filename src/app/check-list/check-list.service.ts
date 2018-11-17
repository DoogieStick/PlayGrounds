import { Injectable } from '@angular/core';
import { CheckList } from './check-list';
import { CHECKLISTS_ON_LOAD } from './check-list-data';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class CheckListService {
  
    constructor(private http: Http, private router : Router) {}

    private values: Array<CheckList> = [];
    private anyErrors: boolean;
    private finished: boolean;
    public checkLists: any = [];
	
	public checkListsOnload="";
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

	
}
