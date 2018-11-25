import { Component, OnInit } from '@angular/core';
import { Playground } from './playground';
import { PlaygroundService } from 'app/playground/playground.service';
import { Equipment } from '../equipment/equipment'; 
import { EquipmentService } from '../equipment/equipment.service';

declare var document : any;

@Component({
  selector: 'add-playground',
  templateUrl: './add-playground.component.html',
  styleUrls: ['./add-playground.component.css']
})
export class AddPlaygroundComponent implements OnInit {
        
    playground : Playground;
    newPlayground : any = [];
    equipments: Equipment[];

  constructor(private playgroundService : PlaygroundService, private equipmentService: EquipmentService) { }

  ngOnInit() {
      document.getElementById("addForm").scrollIntoView();
      this.equipmentService.getEquipmentsFromData()
        .then(result => {
            this.equipments = result.Items;
        });
  }
    
    addPlayground(){
        this.newPlayground.name = document.getElementsByName("name")[0].value;
        this.newPlayground.description = document.getElementsByName("description")[0].value;
        this.newPlayground.address = document.getElementsByName("address")[0].value;
        this.newPlayground.locality = document.getElementsByName("locality")[0].value;
        this.newPlayground.state = document.getElementsByName("state")[0].value;
        this.newPlayground.country = document.getElementsByName("country")[0].value;
        this.playgroundService.addOrEditPlayground(this.newPlayground,"add");
        this.newPlayground = [];
    }
}
