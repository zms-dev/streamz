/**
 * Used to launch the application under Bazel development mode.
 */
import { platformBrowser } from '@angular/platform-browser';
import { AppDevModule } from './app/app-dev.module';

platformBrowser()
  .bootstrapModule(AppDevModule)
  .catch((err) => console.log(err));
