import { Injectable } from '@angular/core';
import { Playground } from './playground/playground';
import { PLAYGROUNDS_ON_LOAD } from './playground/playground-data';

@Injectable()
export class PlaygroundService {
    
    private playsOnload = PLAYGROUNDS_ON_LOAD;
    
    getPlaygroundsFromData(): Playground[] {
    console.log(this.playsOnload);
    return this.playsOnload
  }
    
  constructor() { }

}
