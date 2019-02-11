import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playground } from './playground';
import { PlaygroundService } from 'app/playground/playground.service';
import { Equipment } from '../equipment/equipment';
import { EquipmentService } from '../equipment/equipment.service';

@Component({
  selector: 'app-playground-detail',
  templateUrl: './playground-detail.component.html',
  styleUrls: ['./playground-detail.component.scss']
})
export class PlaygroundDetailComponent implements OnInit {

    id: number;
    private sub: any;
    playground: Playground;
    equipments: Equipment[];

    constructor(private route: ActivatedRoute,
      private playgroundService: PlaygroundService,
      private equipmentService: EquipmentService) {}

  ngOnInit() {

       this.sub = this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.playground = this.playgroundService.getPlaygroundToEdit(this.id);
      });
  }

  onSelectChange(event) {
    if(event.index == 1){
      return this.getEquipments();
    }
  }

  getEquipments() {
    this.equipmentService.getEquipmentsFromData()
    .then(result => {
        this.equipments = result;
        console.info(this.equipments);
    });
  }

}
