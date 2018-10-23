import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from './equipment';
import { EquipmentService } from './equipment.service';

declare var document : any;

@Component({
  selector: 'app-edit-equipments',
  templateUrl: './edit-equipments.component.html',
  styleUrls: ['./edit-equipments.component.css']
})
export class EditEquipmentsComponent implements OnInit {

    id: number;
    private sub: any;
    equipment: Equipment;
    newEquipment: any = [];

    constructor(private route: ActivatedRoute, private equipmentService : EquipmentService){}
    
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.equipment = this.equipmentService.getEquipmentToEdit(this.id);
         document.getElementById("editForm").style.display = "block";    
         document.getElementById("editForm").scrollIntoView();    
      });
    }
     
    editEquipment(){
        this.newEquipment.id = document.getElementsByName("id")[0].value;
        this.newEquipment.code = document.getElementsByName("code")[0].value;
        this.newEquipment.description = document.getElementsByName("description")[0].value;
        this.newEquipment.selfManufactured = document.getElementsByName("selfManufactured")[0].value;

        this.equipmentService.addOrEditEquipment(this.newEquipment);
        this.newEquipment = [];
     
    }
	
	   hideEquipment(){
       document.getElementById("editForm").style.display = "none";     
    }

}
