import { Component, Inject } from '@angular/core';

import { ClientEnvironment, ENVIRONMENT } from '../../environment/index';

/**
 *
 */
@Component({
  selector: 'streamz-feature-home',
  templateUrl: './home.component.ng.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  /**
   * @param {ClientEnvironment} environment The current environment config.
   */
  constructor(
    @Inject(ENVIRONMENT) public readonly environment: ClientEnvironment
  ) {}
}
