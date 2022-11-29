import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defaultStoreProvider } from '@state-adapt/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Car1Component } from './car1.component';
import { Car2Component } from './car2.component';
import { Car3Component } from './car3.component';
import { Car4Component } from './car4.component';
import { Car5Component } from './car5.component';

@NgModule({
  declarations: [
    AppComponent,
    Car1Component,
    Car2Component,
    Car3Component,
    Car4Component,
    Car5Component,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [defaultStoreProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
