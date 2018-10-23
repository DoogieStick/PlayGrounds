import { Injectable } from '@angular/core';
import { Equipment } from './equipment';
import { EQUIPMENTS_ON_LOAD } from './equipment-data';
import {Observable} from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class EquipmentService {

    constructor(private http: Http, private router : Router) {}

    public equipmentsOnload = EQUIPMENTS_ON_LOAD;

    private values: Array<Equipment> = [];
    private anyErrors: boolean;
    private finished: boolean;
    public equipments: any = [];
    public url = 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/playgrounds';        

    getEquipmentsFromData(): Promise<any> {
        document.getElementById('dim').style.display = "block";
        return new Promise((resolve, reject) => {

        let options = new RequestOptions({ headers: new Headers({'x-api-key': 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg',
        'tableName':'Equipments','quantity': 500}) });
		return this.http.get(this.url, options)
			   .map(response => response.json()).subscribe(result => {
                this.equipmentsOnload = result.Items,
                document.getElementById('dim').style.display = "none",
                resolve(result);
            });
       });

    }    
    
	
    deleteProduct(id) {
      this.equipmentsOnload.forEach((item, index) => {
            if(item.id === id){
                this.equipmentsOnload.splice(index , 1);    
            }
      });      
    }
	
    getEquipmentToEdit(id){
        for (let entry of this.equipmentsOnload) {
            if(id == entry.id){
                return entry;
            }
        }
    }
    
    editEquipment(equipment){
        this.equipmentsOnload[equipment.id - 1] = equipment;
    }	

 

}
