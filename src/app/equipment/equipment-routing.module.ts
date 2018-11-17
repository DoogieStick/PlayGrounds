import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditEquipmentsComponent } from './edit-equipments.component';
import { AddEquipmentComponent } from './add-equipment.component';

const routesEquipments: Routes = [
  { path: 'equipment/edit-equipment/:id', component: EditEquipmentsComponent},
  { path: 'equipment/add-equipment', component: AddEquipmentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routesEquipments,{useHash: true})],
  exports: [ RouterModule ]
})
export class EquipmentRoutingModule {}
