import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckListUnitComponent } from './check-list-unit.component';

const routesCheckLists: Routes = [
    { path: 'check-list/check-list-unit/:id', component: CheckListUnitComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routesCheckLists, {useHash: true})],
    exports: [ RouterModule ]
})

export class CheckListRoutingModule { }
