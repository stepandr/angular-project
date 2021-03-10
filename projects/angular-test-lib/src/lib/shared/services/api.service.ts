import { Injectable, Optional } from '@angular/core';
import { Configuration } from './service.configuration';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public configuration = new Configuration();

  constructor(
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
  }

  getConfigurationBasePathParam() {
    return this.configuration.basePath;
  }
}
