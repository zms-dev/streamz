import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 *
 */
@Component({
  selector: 'streamz-app',
  templateUrl: './app.component.ng.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'streamz-app',
  },
})
export class AppComponent {}
