import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground';

import { EditPlaygroundsComponent } from './edit-playgrounds.component';

const routesPlaygrounds: Routes = [
  { path: 'edit-playground/:id', component: EditPlaygroundsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routesPlaygrounds) ],
  exports: [ RouterModule ]
})
export class PlaygroundRoutingModule {}