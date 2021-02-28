import { Component, Inject } from '@angular/core';

import { ClientEnvironment, ENVIRONMENT } from '../../environment';

/**
 *
 */
@Component({
  selector: 'streamz-feature-about',
  templateUrl: './about.component.ng.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  /**
   * @param {ClientEnvironment} environment The current environment config.
   */
  constructor(
    @Inject(ENVIRONMENT) public readonly environment: ClientEnvironment
  ) {}
}
