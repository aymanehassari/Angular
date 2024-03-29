import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentedComponent } from './rented/rented.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivingListComponent,
    RentedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
