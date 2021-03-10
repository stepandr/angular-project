import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularTestLibModule } from 'angular-test-lib';
// import { AngularTestLibModule } from '@stepan_fedorov_simbirsoft/angular-test-lib';

import { AppComponent } from './app.component';

import { AngularTestLibModule,
  Configuration as ApiConfiguration,
  ServiceConfigurationParameters } from 'angular-test-lib';

export function ApiConfigFactory(): ApiConfiguration {
  const params: ServiceConfigurationParameters = {};
  return new ApiConfiguration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularTestLibModule.forRoot(ApiConfigFactory),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
