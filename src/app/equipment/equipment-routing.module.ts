import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Equipment } from './equipment';

import { EditEquipmentsComponent } from './edit-equipments.component';

const routesEquipments: Routes = [
  { path: 'edit-equipment/:id', component: EditEquipmentsComponent}
];


@NgModule({
    imports: [ RouterModule.forRoot(routesEquipments), CommonModule ],
  exports: [ RouterModule ]
})
export class EquipmentRoutingModule {}
