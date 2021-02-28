import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 *
 */
@Component({
  selector: 'streamz-core-header',
  templateUrl: './header.component.ng.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'streamz-core-header',
    'role': 'heading',
    'aria-level': '1',
  },
})
export class HeaderComponent {}
