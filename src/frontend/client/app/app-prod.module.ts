import { isPlatformBrowser } from '@angular/common';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';

import { ClientEnvironment, ENVIRONMENT } from '../environment';

import { AppBaseModule } from './app-base.module';
import { AppComponent } from './app.component';

/**
 *
 */
@NgModule({
  imports: [AppBaseModule],
  bootstrap: [AppComponent],
  providers: [{ provide: ENVIRONMENT, useValue: ClientEnvironment.PROD }],
})
export class AppProdModule {
  /**
   * @param {ClientEnvironment} environment The current environment config.
   * @param {string} platform The platform the client is running on.
   */
  constructor(
    @Inject(ENVIRONMENT) private readonly environment: ClientEnvironment,
    @Inject(PLATFORM_ID) private readonly platform: string
  ) {
    if (isPlatformBrowser(this.platform)) {
      console.log('🚀 Launching production app', this.environment);
    }
  }
}
