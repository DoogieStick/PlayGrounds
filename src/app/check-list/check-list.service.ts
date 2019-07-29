import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class CheckListService {

    private readonly endpoint = `${environment.apiUrlPlaygrounds}/`;
    private headers: Object;
    results: Object[];

    constructor(private http: HttpClient) {
        this.headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-api-key': `${environment.restKey}`,
                'tableName': 'Checklists',
                'quantity': '500'
            })
        }
    }

    getCheckListsFromData(): Promise<any> {
        return this.http.get(this.endpoint, this.headers)
            .toPromise();

    }

}
