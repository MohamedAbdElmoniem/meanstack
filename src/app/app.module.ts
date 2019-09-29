import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/FilterComponent/filter.component'
import { HeaderComponent } from './components/HeaderComponent/header.component'
import { SliderComponent } from './components/SliderComponent/slider.component'

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
