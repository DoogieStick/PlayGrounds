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

    constructor(private route: ActivatedRoute,
      private playgroundService: PlaygroundService,
      private equipmentService: EquipmentService,
      private iconRegistry: MatIconRegistry, 
      private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'thumbs-up',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/kart.svg'));
       this.sub = this.route.params.subscribe(params => {
         this.id = +params['id'];
         this.playground = this.playgroundService.getPlaygroundToEdit(this.id);
      });
      this.countItemsByEquipment(this.playground)
  }

  countItemsByEquipment(play){
    this.testEquipments = play.equipments;
    console.info("equip " , this.testEquipments);
    const source = from(this.testEquipments);
    const example = source.pipe(
      groupBy(person => person.id),
      mergeMap(group => group.pipe(toArray()))
    );
    const subscribe = example.subscribe(val => console.info("final arrays" , val));
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
    
    console.info("playgrounds" , this.playground);
    this.playgroundService.addOrEditPlayground(this.playground,"edit");
  }

}
