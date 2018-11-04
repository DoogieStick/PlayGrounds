import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground/playground';
import { PlaygroundComponent } from './playground/playground.component';
import { CheckListComponent } from './check-list/check-list.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentComponent, pathMatch: 'full' },
  { path: '', component: LoginComponent},
  { path: 'playgrounds', component: PlaygroundComponent},
  { path: 'check-list', component: CheckListComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule {}