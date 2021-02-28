/**
 * Used to launch the application under Bazel production mode.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppProdModule } from './app/app-prod.module';

enableProdMode();

document.addEventListener('DOMContentLoaded', () => {
  platformBrowser()
    .bootstrapModule(AppProdModule)
    .catch((err) => console.log(err));
});
