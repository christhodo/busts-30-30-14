import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BustsComponent } from './busts/busts.component';
import { BustsListComponent } from './busts/busts-list/busts-list.component';
import { BustDetailsComponent } from './busts/bust-details/bust-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    BustsComponent,
    BustsListComponent,
    BustDetailsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
