import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

declare var document : any;

@Injectable()
export class LoginService {

      constructor(private http: Http, private router : Router) {}

    public url = 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/login';

    loginUser(client) :Promise<any> {
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg','tableName':'Client'}) });
            
        return this.http.post(this.url , client, options).map(response => response.json()).subscribe(result => {
            document.getElementById('dim').style.display = "none";
            resolve(result);
        });
      });
    }
}
