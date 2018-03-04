import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground/playground';

import { EditPlaygroundsComponent } from './edit-playgrounds/edit-playgrounds.component';

const routes: Routes = [
  { path: 'edit-playground/:playground', component: EditPlaygroundsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule { }
