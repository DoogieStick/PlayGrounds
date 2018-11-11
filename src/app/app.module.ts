import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EditPlaygroundsComponent } from './playground/edit-playgrounds.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EditEquipmentsComponent } from './equipment/edit-equipments.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { PlaygroundService } from './playground/playground.service';
import { EquipmentService } from './equipment/equipment.service';
import { CheckListService } from './check-list/check-list.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlaygroundRoutingModule } from './playground/playground-routing.module';
import { EquipmentRoutingModule } from './equipment/equipment-routing.module';
import { AddPlaygroundComponent } from './playground/add-playground.component';
import { CheckListComponent } from './check-list/check-list.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { AddEquipmentComponent } from './equipment/add-equipment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlaygroundComponent,
    EditPlaygroundsComponent,
	EquipmentComponent,
	EditEquipmentsComponent,
	AddPlaygroundComponent,
	CheckListComponent,
	LoadingComponent,
    LoginComponent,
    ModalComponent,
    AddEquipmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    RouterTestingModule,
    AngularFontAwesomeModule,
    PlaygroundRoutingModule,
    EquipmentRoutingModule
  ],
  providers: [PlaygroundService, EquipmentService, CheckListService, LoginService, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }