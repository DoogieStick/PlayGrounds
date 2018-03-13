import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EditPlaygroundsComponent } from './playground/edit-playgrounds.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EditEquipmentsComponent } from './equipment/edit-equipments.component';

import { AppRoutingModule }     from './app-routing.module';
import { PlaygroundService } from './playground/playground.service';
import { EquipmentService } from './equipment/equipment.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlaygroundRoutingModule } from './playground/playground-routing.module';
import { EquipmentRoutingModule } from './equipment/equipment-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlaygroundComponent,
    EditPlaygroundsComponent,
	EquipmentComponent,
	EditEquipmentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterTestingModule,
    AngularFontAwesomeModule,
    PlaygroundRoutingModule
  ],
  providers: [PlaygroundService, EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
