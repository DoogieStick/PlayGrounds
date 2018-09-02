import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground/playground';
import { PlaygroundComponent } from './playground/playground.component';
import { CheckListComponent } from './check-list/check-list.component';
import { EquipmentComponent } from './equipment/equipment.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentComponent, pathMatch: 'full' },
  { path: '', component: PlaygroundComponent},
    { path: 'check-list', component: CheckListComponent, pathMatch: 'full' } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule {}