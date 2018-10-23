import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditEquipmentsComponent } from './edit-equipments.component';

const routesEquipments: Routes = [
  { path: 'equipment/edit-equipment/:id', component: EditEquipmentsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routesEquipments,{useHash: true})],
  exports: [ RouterModule ]
})
export class EquipmentRoutingModule {}
