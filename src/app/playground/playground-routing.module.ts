import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EditPlaygroundsComponent } from './edit-playgrounds.component';
import { PlaygroundDetailComponent } from './playground-detail.component';
import { AddPlaygroundComponent } from './add-playground.component';

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