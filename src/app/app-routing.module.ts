import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditarPlaygroundsComponent } from './editar-playgrounds/editar-playgrounds.component';

const routes: Routes = [
  { path: 'editar-playground', component: EditarPlaygroundsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule { }
