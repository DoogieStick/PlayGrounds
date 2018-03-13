import { Component, OnInit } from '@angular/core';
import { Equipment } from './equipment';
import { EquipmentService } from './equipment.service';

declare var document : any;
declare var console : any;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments : Equipment[];
    visible: boolean = true;
    breakpoint: number = 768;

  constructor(private equipmentService : EquipmentService) { }

  ngOnInit() {
	  this.getEquipments();
	  document.getElementsByTagName("app-playground")[0].style.display = "none";
	  if(screen.width < 768){this.visible = false;}  
  }
   
   
    getEquipments() {
        this.equipments = this.equipmentService.getEquipmentsFromData();
    }
    showAddEquipmentForm(){
        console.info("it works");    
    }
    
    deleteEquipment(name) {
     this.equipmentService.deleteProduct(name);
    }
	
    onResize(event) {
      const w = event.target.innerWidth;
      if (w >= this.breakpoint) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }	

}
