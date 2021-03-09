import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularTestLibModule } from 'angular-test-lib';
// import { AngularTestLibModule } from '@stepan_fedorov_simbirsoft/angular-test-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularTestLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
