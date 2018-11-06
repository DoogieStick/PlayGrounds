import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground/playground';
import { PlaygroundComponent } from './playground/playground.component';
import { CheckListComponent } from './check-list/check-list.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', component: LoginComponent},
  { path: 'playgrounds', component: PlaygroundComponent , canActivate: [AuthGuard]},
  { path: 'check-list', component: CheckListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule {}