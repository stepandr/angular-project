import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularTestLibComponent } from './angular-test-lib.component';
import { Configuration } from './shared/services/service.configuration';

@NgModule({
  declarations: [AngularTestLibComponent],
  imports: [
  ],
  exports: [AngularTestLibComponent]
})
export class AngularTestLibModule {
  static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
    return {
      ngModule: AngularTestLibModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }
}
