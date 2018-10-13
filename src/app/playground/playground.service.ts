import { Playground } from './playground';
import { PLAYGROUNDS_ON_LOAD } from './playground-data';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

declare var document : any;

@Injectable()
export class PlaygroundService {

      constructor(private http: Http, private router : Router) {}

    public playsOnload = PLAYGROUNDS_ON_LOAD;
    private values: Array<Playground> = [];
    private anyErrors: boolean;
    private finished: boolean;
    public plays: any = [];
    public url = 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/playgrounds';

    getPlaygroundsFromData(): Promise<any> {
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg',
        'tableName':'Playgrounds','quantity': 500}) });
		return this.http.get(this.url, options)
			   .map(response => response.json()).subscribe(result => {
                this.playsOnload = result.Items,
                document.getElementById('dim').style.display = "none",
                resolve(result);
            });
       });

    }

    getPlaygroundToEdit(id) {
        for (const entry of this.playsOnload) {
            if (id === entry.id) {
                return entry;
            }
        }
    }

    addOrEditPlayground(playground) {

        document.getElementById('dim').style.display = "block";
      
      return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg','tableName':'Playgrounds','quantity': 500}) });

        var play = {
            "id":parseInt(playground.id),
            "name":playground.name,
            "description":playground.description,
            "address":playground.address,
            "country":playground.country,
            "state":playground.state,
            "locality":playground.locality
        };

        return this.http.put(this.url , play, options).map(response => response.json()).subscribe(result => {
            document.getElementById('dim').style.display = "none";
            this.router.navigate(['']);
            resolve(result);
        });
      });
    }

    deletePlayground(id) {
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg','tableName':'Playgrounds','quantity': 500}) });
            
        var play = {"id":parseInt(id)};
        
        return this.http.post(this.url , play, options).map(response => response.json()).subscribe(result => {
            document.getElementById('dim').style.display = "none";
            document.location.reload();
            resolve(result);
        });
      });
    }
}
