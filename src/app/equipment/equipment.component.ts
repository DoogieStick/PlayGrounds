import { Component, OnInit } from '@angular/core';
import { Equipment } from './equipment';
import { EquipmentService } from './equipment.service';
import { ModalComponent } from '../modal/modal.component';
import {Router} from '@angular/router';

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
	cancel=false;

  constructor(private equipmentService: EquipmentService,
				private router : Router, private modal : ModalComponent) { }
  
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
    	var modal = this.modal.openModalAlert("Exclusion" , "Confirm exclusion of this equipment?",this.equipmentService);
        modal.then(function(value) {
           if(value.cod === 1){
            value.controller.deleteEquipment(id);
           }
        });
        console.log(id);
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