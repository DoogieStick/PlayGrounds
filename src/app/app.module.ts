import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { EditPlaygroundsComponent } from './edit-playgrounds/edit-playgrounds.component';

import { AppRoutingModule }     from './app-routing.module';
import { PlaygroundService } from './playground.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    AngularFontAwesomeModule
  ],
  providers: [PlaygroundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
