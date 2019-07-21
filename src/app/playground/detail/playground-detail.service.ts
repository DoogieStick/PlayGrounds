import { Http, Headers,  RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class PlaygroundDetailService {

  public url = environment.apiUrlGetInspections;
  public inspectionsTable = environment.inspectionsTable;
  public filledChecklistsTable = environment.filledChecklistsTable;
  constructor(private http: Http) {}

  getInspections(id) {
    return new Promise((resolve, reject) => {
      const options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
      'tableName': this.inspectionsTable, 'id': id}) });
      const play = {};
      return this.http.post(this.url , play, options).map(response => response.json())
      .subscribe(result => {
        resolve(result)
      });
    });
  }

  getFilledCheckLists(id) {
    return new Promise((resolve, reject) => {
      const options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
      'tableName': this.filledChecklistsTable, 'id': id}) });
      const play = {};
      return this.http.post(this.url , play, options).map(response => response.json())
      .subscribe(result => {
        resolve(result)
      });
    });
  }
}