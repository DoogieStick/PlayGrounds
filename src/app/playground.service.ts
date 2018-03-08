import { Injectable } from '@angular/core';
import { Playground } from './playground/playground';
import { PLAYGROUNDS_ON_LOAD } from './playground/playground-data';

@Injectable()
export class PlaygroundService {
    
    private playsOnload = PLAYGROUNDS_ON_LOAD;
    
    getPlaygroundsFromData(): Playground[] {
      return this.playsOnload
    }
    
    getPlaygroundToEdit(id){
        for (let entry of this.playsOnload) {
            if(id == entry.id){
                return entry;
            }
        }
    }
    
    deleteProduct(id) {
      this.playsOnload.splice(this.playsOnload.indexOf(id), 1);
    }
    
  constructor() { }

}