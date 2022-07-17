import { NgModule, ModuleWithProviders } from '@angular/core';
import { BUST_ENVIRONMENT } from './busts.token';
import { BustEnvironment } from './busts.model';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: BustEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BUST_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
