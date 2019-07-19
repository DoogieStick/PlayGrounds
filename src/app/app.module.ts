import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EditPlaygroundsComponent } from './playground/edit/edit-playgrounds.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EditEquipmentsComponent } from './equipment/edit-equipments.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login/login.service';
import { PlaygroundService } from './playground/playground.service';
import { EquipmentService } from './equipment/equipment.service';
import { CheckListService } from './check-list/check-list.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlaygroundRoutingModule } from './playground/playground-routing.module';
import { EquipmentRoutingModule } from './equipment/equipment-routing.module';
import { CheckListRoutingModule } from './check-list/check-list-routing.module';
import { AddPlaygroundComponent } from './playground/add/add-playground.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListUnitComponent } from './check-list/check-list-unit.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { AddEquipmentComponent } from './equipment/add-equipment.component';
import { PlaygroundDetailComponent } from './playground/detail/playground-detail.component';
import { PlaygroundDetailService } from './playground/detail/playground-detail.service';


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
    AddEquipmentComponent,
    CheckListUnitComponent,
    PlaygroundDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    RouterTestingModule,
    AngularFontAwesomeModule,
    PlaygroundRoutingModule,
    EquipmentRoutingModule,
    CheckListRoutingModule
  ],
  providers: [PlaygroundService, EquipmentService, CheckListService, LoginService, ModalComponent, AuthService, PlaygroundDetailService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}