import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EditPlaygroundsComponent } from './playground/edit-playgrounds.component';

import { AppRoutingModule }     from './app-routing.module';
import { PlaygroundService } from './playground/playground.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlaygroundRoutingModule } from './playground/playground-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PlaygroundComponent,
    EditPlaygroundsComponent,
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
  providers: [PlaygroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
