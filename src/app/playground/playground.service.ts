import { Injectable } from '@angular/core';
import { Playground } from './playground';
import { PLAYGROUNDS_ON_LOAD } from './playground-data';

@Injectable()
export class PlaygroundService {
    
    private playsOnload = PLAYGROUNDS_ON_LOAD;
    
    getPlaygroundsFromData(): Playground[] {
      return this.playsOnload;
    }
    
    getPlaygroundToEdit(id){
        for (let entry of this.playsOnload) {
            if(id == entry.id){
                return entry;
            }
        }
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
  constructor() {}
}