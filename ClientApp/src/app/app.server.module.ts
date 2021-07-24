import ***REMOVED*** NgModule ***REMOVED*** from '@angular/core';
import ***REMOVED*** ServerModule ***REMOVED*** from '@angular/platform-server';
import ***REMOVED*** ModuleMapLoaderModule ***REMOVED*** from '@nguniversal/module-map-ngfactory-loader';
import ***REMOVED*** AppComponent ***REMOVED*** from './app.component';
import ***REMOVED*** AppModule ***REMOVED*** from './app.module';

@NgModule(***REMOVED***
    imports: [AppModule, ServerModule, ModuleMapLoaderModule],
    bootstrap: [AppComponent]
***REMOVED***)
export class AppServerModule ***REMOVED*** ***REMOVED***
