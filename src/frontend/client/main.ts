/**
 * This main entry point is used to launch the app.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBaseModule } from './app/app-base.module';

platformBrowserDynamic()
  .bootstrapModule(AppBaseModule)
  .catch((err) => console.log(err));
