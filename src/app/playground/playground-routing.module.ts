import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Playground } from './playground';
import { EditPlaygroundsComponent } from './edit-playgrounds.component';
import { AddPlaygroundComponent } from './add-playground.component';

const routesPlaygrounds: Routes = [
  { path: 'edit-playground/:id', component: EditPlaygroundsComponent},
  { path: 'add-playground', component: AddPlaygroundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routesPlaygrounds) ],
  exports: [ RouterModule ]
})
export class PlaygroundRoutingModule {}