import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UltraTabsComponent } from './ultra-tabs/ultra-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    UltraTabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
