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

    equipments: Equipment[];
    visible: boolean = true;
    breakpoint: number = 768;

  constructor(private equipmentService: EquipmentService) { }
  
    ngOnInit() {
      this.getEquipments();
      if(screen.width < 768){this.visible = false;}  
    }
    
    getEquipments() {
        this.equipmentService.getEquipmentsFromData()
        .then(result => {
            this.equipments = result;
        });
    }
    
    deleteEquipment(id) {
     this.equipmentService.deleteEquipment(id);
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
