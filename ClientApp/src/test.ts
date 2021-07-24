// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import ***REMOVED*** getTestBed ***REMOVED*** from '@angular/core/testing';
import ***REMOVED***
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
***REMOVED*** from '@angular/platform-browser-dynamic/testing';

declare const require;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
