import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground/playground';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: 'equipment', component: EquipmentComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule {}