import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditPlaygroundsComponent } from './edit-playgrounds/edit-playgrounds.component';

const routes: Routes = [
  { path: 'edit-playground/:id', component: EditPlaygroundsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule { }
