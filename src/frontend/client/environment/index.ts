import { InjectionToken } from '@angular/core';

export enum ClientEnvironment {
  PROD = 'PROD',
  DEV = 'DEV',
}

export const ENVIRONMENT = new InjectionToken<ClientEnvironment>(
  'CLIENT_ENVIRONMENT'
);
