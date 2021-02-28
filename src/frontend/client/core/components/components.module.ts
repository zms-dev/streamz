import { NgModule } from '@angular/core';

import { HeaderModule } from './header';
import { SidebarModule } from './sidebar';

/**
 *
 */
@NgModule({
  imports: [HeaderModule, SidebarModule],
  exports: [HeaderModule, SidebarModule],
})
export class ComponentsModule {}
