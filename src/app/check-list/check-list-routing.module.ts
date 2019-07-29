import { AddCheckListComponent } from './add/add-check-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { CheckListUnitComponent } from './check-list-unit.component';

const routesCheckLists: Routes = [
    // { path: 'check-list/check-list-unit/:id', component: CheckListUnitComponent}
    // { path: 'playgrounds/edit-playground/:id', component: EditPlaygroundsComponent },
    // { path: 'playgrounds/playground-detail/:id', component: PlaygroundDetailComponent },
    // { path: 'playgrounds/add-playground', component: AddPlaygroundComponent }
    { path: 'check-list/add-check-list', component: AddCheckListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routesCheckLists, {useHash: true})],
    exports: [ RouterModule ]
})

export class CheckListRoutingModule { }
