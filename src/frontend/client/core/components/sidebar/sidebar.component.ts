import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 *
 */
@Component({
  selector: 'streamz-core-sidebar',
  templateUrl: './sidebar.component.ng.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'streamz-core-sidebar',
    'role': 'navigation',
  },
})
export class SidebarComponent {}
