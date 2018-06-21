import { Playground } from './playground';
import { PLAYGROUNDS_ON_LOAD } from './playground-data';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaygroundService {

      constructor(private http: Http) {}

    public playsOnload = PLAYGROUNDS_ON_LOAD;
    private values: Array<Playground> = [];
    private anyErrors: boolean;
    private finished: boolean;
    public plays: any = [];

    getPlaygroundsFromData(): Promise<any> {

      const method = RequestMethod.Get;
      const req = this.requestHTTP(method);

        return new Promise((resolve, reject) => {

            this.http.request(req).map(response => response.json()).subscribe(result => {

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

    addPlayground(playground) {
        this.playsOnload.push(playground);
    }

    editPlayground(playground) {
        this.playsOnload[playground.id - 1] = playground;
    }

    deleteProduct(name) {
      this.playsOnload.forEach((item, index) => {
            if (item.name === name) {
                this.playsOnload.splice(index , 1);
            }
      });
    }

    requestHTTP(method) {

        const headerDict = {
          'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg'
        }


        const options = new RequestOptions({
          headers: new Headers(headerDict),
          method: method,
          url: 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/playgrounds',
        });

        const req = new Request(options);
        return req;

    }


}
