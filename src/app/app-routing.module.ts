import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Playground } from './playground/playground';
import { EditPlaygroundsComponent } from './playground/edit-playgrounds.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: 'edit-playground/:id', component: EditPlaygroundsComponent},  
  { path: 'equipment', component: EquipmentComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule { }
