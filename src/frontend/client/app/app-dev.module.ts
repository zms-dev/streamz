import { Inject, NgModule } from '@angular/core';

import { ClientEnvironment, ENVIRONMENT } from '../environment/index';

import { AppBaseModule } from './app-base.module';
import { AppComponent } from './app.component';

/**
 *
 */
@NgModule({
  imports: [AppBaseModule],
  bootstrap: [AppComponent],
  providers: [{ provide: ENVIRONMENT, useValue: ClientEnvironment.DEV }],
})
export class AppDevModule {
  /**
   * @param {ClientEnvironment} environment The current environment config.
   */
  constructor(
    @Inject(ENVIRONMENT) private readonly environment: ClientEnvironment
  ) {
    console.log('🛠️ Launching development app', this.environment);
  }
}
