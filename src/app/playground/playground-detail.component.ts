import { Component, OnInit, group } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playground } from './playground';
import { PlaygroundService } from 'app/playground/playground.service';
import { Equipment } from '../equipment/equipment';
import { EquipmentService } from '../equipment/equipment.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';



declare var document : any;


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
    testEquipments: Equipment[];
    newPlayground : any = [];
    finalEquipments : Equipment[];

    constructor(private route: ActivatedRoute,
      private playgroundService: PlaygroundService,
      private equipmentService: EquipmentService,
      private iconRegistry: MatIconRegistry, 
      private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.finalEquipments = [];
    this.iconRegistry.addSvgIcon(
      'thumbs-up',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/kart.svg'));
       this.sub = this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.playground = this.playgroundService.getPlaygroundToEdit(this.id);
      });
  }

  countItemsByEquipment(play){
    this.finalEquipments = [];
    this.testEquipments = play.equipments != undefined ? play.equipments : [];
    const source = from(this.testEquipments);
    const groupEquipments = source.pipe(
      groupBy(person => person.id),
      mergeMap(group => group.pipe(toArray()))
    );
    const subscribe = groupEquipments.subscribe(groupedArrays => {
      groupedArrays[0].equipLength = groupedArrays.length;
      this.finalEquipments.push(groupedArrays[0]);
    });
  }

  editPlayground(){
    this.newPlayground.id = document.getElementsByName("id")[0].value;
    this.newPlayground.name = document.getElementsByName("name")[0].value;
    this.newPlayground.description = document.getElementsByName("description")[0].value;
    this.newPlayground.address = document.getElementsByName("address")[0].value;
    this.newPlayground.locality = document.getElementsByName("locality")[0].value;
    this.newPlayground.state = document.getElementsByName("state")[0].value;
    this.newPlayground.country = document.getElementsByName("country")[0].value;
    this.playgroundService.addOrEditPlayground(this.newPlayground,"edit");
    this.newPlayground = [];
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
        this.countItemsByEquipment(this.playground)
    });
  }

  addEquipmentToPark(id){
    if(this.playground.equipments){
      this.playground.equipments.push(this.equipments
        .filter(equipmentFiltered => equipmentFiltered.id === id)[0])
    }else{
      this.playground.equipments = [];
      this.playground.equipments.push(this.equipments
        .filter(equipmentFiltered => equipmentFiltered.id === id)[0])
    }
    this.playgroundService.addOrEditPlayground(this.playground,"edit");
  }

  deleteEquipmentFromPark(id){
    this.playground.equipments.some((equipmentFiltered) => {
      if(equipmentFiltered.id === id){
        const index = this.playground.equipments.indexOf(equipmentFiltered);
        this.playground.equipments.splice( index, 1 );
        return true;
      }
    });
    this.playgroundService.addOrEditPlayground(this.playground,"edit");
  }
}
