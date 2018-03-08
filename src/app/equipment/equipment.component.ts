import { Component, OnInit } from '@angular/core';
import { Equipment } from './equipment';
import { EquipmentService } from 'app/equipment/equipment.service';

declare var document : any;
declare var console : any;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments : Equipment[];

  constructor(private equipmentService : EquipmentService) { }

  ngOnInit() {
	  this.getEquipments();
	  document.getElementsByTagName("app-playground")[0].style.display = "none";
  }
   
   
    getEquipments() {
        this.equipments = this.equipmentService.getEquipmentsFromData();
    }
    showAddEquipmentForm(){
        console.info("it works");    
    }
    
    deleteEquipment(id) {
     this.equipmentService.deleteProduct(id);
    }

}
