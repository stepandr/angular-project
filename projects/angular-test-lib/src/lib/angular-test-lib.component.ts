import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'lib-angular-test-lib',
  template: `
    <p>
      angular-test-lib works service run!
    </p>
    <p>angular-test-lib param: {{ basePathAngularTestLibParam }}</p>
  `,
  styles: []
})
export class AngularTestLibComponent implements OnInit {
  public basePathAngularTestLibParam: null | string;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.basePathAngularTestLibParam = this.apiService.getConfigurationBasePathParam();
  }

}
