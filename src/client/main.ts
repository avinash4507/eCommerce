import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {ECommerceApp} from './app/e-commerce.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(ECommerceApp);
