import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EditPlaygroundsComponent } from './playground/edit-playgrounds.component';
import { EquipmentComponent } from './equipment/equipment.component';

import { AppRoutingModule }     from './app-routing.module';
import { PlaygroundService } from './playground/playground.service';
import { EquipmentService } from './equipment/equipment.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlaygroundComponent,
    EditPlaygroundsComponent,
	EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterTestingModule,
    AngularFontAwesomeModule
  ],
  providers: [PlaygroundService, EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
