import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playground } from './playground/playground';

import { EditPlaygroundsComponent } from './playground/edit-playgrounds.component';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
    
export class AppRoutingModule {}