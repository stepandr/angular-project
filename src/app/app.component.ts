import { Component, OnInit } from '@angular/core';
import { ApiService } from 'angular-test-lib';
import { Configuration as ApiConfiguration } from 'angular-test-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  public basePathAngularTestLibParam: null | string;

  constructor(
    private apiConfiguration: ApiConfiguration,
    private apiService: ApiService,
  ) {
    this.apiConfiguration.basePath = 'url_api';
    this.apiConfiguration.token = () => 'token';
  }

  ngOnInit() {
    this.basePathAngularTestLibParam = this.apiService.getConfigurationBasePathParam();
  }
}
