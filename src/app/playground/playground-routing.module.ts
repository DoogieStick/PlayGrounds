import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditPlaygroundsComponent } from './edit/edit-playgrounds.component';
import { PlaygroundDetailComponent } from './detail/playground-detail.component';
import { AddPlaygroundComponent } from './add/add-playground.component';

const routesPlaygrounds: Routes = [
  { path: 'playgrounds/edit-playground/:id', component: EditPlaygroundsComponent},
  { path: 'playgrounds/playground-detail/:id', component: PlaygroundDetailComponent},
  { path: 'playgrounds/add-playground', component: AddPlaygroundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routesPlaygrounds, {useHash: true})],
  exports: [ RouterModule ]
})
export class PlaygroundRoutingModule {}