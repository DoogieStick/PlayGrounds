import { Component, OnInit } from '@angular/core';
import { Equipment } from './equipment';
import { EquipmentService } from 'app/equipment/equipment.service';

declare var document : any;

@Component({
  selector: 'add-equipment',
  templateUrl: './add-equipment.component.html'
})
export class AddEquipmentComponent implements OnInit {
        
    equipment : Equipment;
    newEquipment : any = [];

  constructor(private equipmentService : EquipmentService) { }

  ngOnInit() {
      //document.getElementById("addForm").scrollIntoView();
  }
    
    addEquipment(){
        this.newEquipment.id = document.getElementsByName("id")[0].value;
        this.newEquipment.code = document.getElementsByName("code")[0].value;
        this.newEquipment.description = document.getElementsByName("description")[0].value;
		
		if (document.getElementsByName("selfManufactured")[0].checked) 
		{
			this.newEquipment.selfManufactured = "true"
		}
		else
		{
			this.newEquipment.selfManufactured = "false"
		};

        this.equipmentService.addOrEditEquipment(this.newEquipment);
        this.newEquipment = []; 
	}
}
