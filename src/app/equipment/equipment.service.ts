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
      this.equipmentsOnload.splice(this.equipmentsOnload.indexOf(id), 1);
    }
	

  constructor() { }

}
