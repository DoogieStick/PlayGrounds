import { Playground } from './playground';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Http, Headers,  RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

declare var document: any;

@Injectable()
export class PlaygroundService {

    constructor(private http: Http, private router: Router) {}

    playsOnload : Playground [] = [];
    public playsLength = 0;
    public plays: any = [];
    public url = environment.apiUrlPlaygrounds;
    public key = environment.restKey;
    public playgroundsTable = environment.playgroundsTable;
    private cache = new Map();


    getPlaygroundsFromData(): Promise<any> {
        
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {
        
        if(this.cache.get("plays")){
            this.playsOnload = this.cache.get("plays").value;
            this.playsLength = Math.max.apply(Math,this.playsOnload.map(function(play) { return play.id; }));
            resolve(this.playsOnload);
        }else{
            let options = new RequestOptions({ headers: new Headers({'x-api-key': this.key,
            'tableName': this.playgroundsTable,'quantity': 500}) });
            
             this.http.get(this.url, options)
               .map(response => response.json()).subscribe(result => {
                this.playsOnload = result.Items.sort(function (a, b) {return a.id - b.id;}),
                this.cache.set("plays", { value: this.playsOnload, expiry: Date.now() + 300000 }),
                this.playsLength = this.playsOnload.length != 0 ? Math.max.apply(Math, this.playsOnload
                    .map(function(play) { return play.id; })) : 0,
                resolve(this.playsOnload);
            });
        }    
        
       });

    }

    getPlaygroundToEdit(id) {
        return this.getPlaygroundsFromData().then((play) => {
            this.playsOnload = play;
            for (const entry of this.playsOnload) {
                if (id === entry.id) {
                    document.getElementById('dim').style.display = "none";
                    return entry;
                }
            }
        })
    }

    addOrEditPlayground(playground,method) {

        document.getElementById('dim').style.display = "block";
      
      return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': this.key,'tableName': this.playgroundsTable,'quantity': 500}) });
        let id = method === "add" ? Number(this.playsLength) + 1 : parseInt(playground.id); 
          
        var play = {
            "id":id,
            "name":playground.name,
            "equipments":playground.equipments !== undefined ? playground.equipments : [],
            "description":playground.description,
            "address":playground.address,
            "country":playground.country,
            "state":playground.state,
            "locality":playground.locality
        };

        console.info("dynamo",play)

        return this.http.put(this.url , play, options).map(response => response.json()).subscribe(result => {
            document.getElementById('dim').style.display = "none";
            this.playsOnload = this.playsOnload
            .map(function(item) { return item.id == play.id ? play : item; });
            this.cache.set("plays", { value: this.playsOnload, expiry: Date.now() + 300000 })
            this.router.navigate(['playgrounds']);
            resolve(result);
        });
      });
    }

    deletePlayground(id) {
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json',
        'x-api-key': this.key,'tableName': this.playgroundsTable,'quantity': 500}) });
            
        var play = {"id":parseInt(id)};
        
        return this.http.post(this.url , play, options).map(response => response.json())
        .subscribe(result => {
            console.info("result ",result)
            document.getElementById('dim').style.display = "none";
            document.location.reload();
            resolve(result);
        });
      });
    }
}