import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutUsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
