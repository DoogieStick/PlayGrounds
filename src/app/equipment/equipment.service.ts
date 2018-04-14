import { Injectable } from '@angular/core';
import { Equipment } from './equipment';
import { EQUIPMENTS_ON_LOAD } from './equipment-data';

@Injectable()
export class EquipmentService {

    private equipmentsOnload = EQUIPMENTS_ON_LOAD;
    
    getEquipmentsFromData(): Equipment[] {
      return this.equipmentsOnload
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

  constructor() { }

}
