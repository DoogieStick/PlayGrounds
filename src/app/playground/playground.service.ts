import { Playground } from './playground';
import { PLAYGROUNDS_ON_LOAD } from './playground-data';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaygroundService {
        
      constructor(private http: Http){}

    
    private playsOnload = PLAYGROUNDS_ON_LOAD;
    public ip : any = [];
    
    getPlaygroundsFromData(): Playground[] {
        
      const headerDict = {
          'x-api-key':'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg'
        }
        
        
        const options = new RequestOptions({
          headers: new Headers(headerDict),  
          method: RequestMethod.Get,
          url: 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/playgrounds',
        });
        
        const req = new Request(options);
        
        this.http.request(req).map(response => response.json()).subscribe(event => console.info(event));
    
      return this.playsOnload;
    }
    
    getPlaygroundToEdit(id){
        for (let entry of this.playsOnload) {
            if(id == entry.id){
                return entry;
            }
        }
    }
    
    addPlayground(playground){
        this.playsOnload.push(playground);
    }
    
    editPlayground(playground){
        this.playsOnload[playground.id - 1] = playground;
    }
    
    deleteProduct(name) {
      this.playsOnload.forEach((item, index) => {
            if(item.name === name){
                this.playsOnload.splice(index , 1);    
            }
      });      
    }
    
}