import 'hammerjs';
import ***REMOVED*** enableProdMode ***REMOVED*** from '@angular/core';
import ***REMOVED*** platformBrowserDynamic ***REMOVED*** from '@angular/platform-browser-dynamic';

import ***REMOVED*** AppModule ***REMOVED*** from './app/app.module';
import ***REMOVED*** environment ***REMOVED*** from './environments/environment';

export function getBaseUrl() ***REMOVED***
  return document.getElementsByTagName('base')[0].href;
***REMOVED***

const providers = [
  ***REMOVED*** provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] ***REMOVED***
];

if (environment.production) ***REMOVED***
  enableProdMode();
***REMOVED***

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
