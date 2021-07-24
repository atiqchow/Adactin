import ***REMOVED*** BrowserModule ***REMOVED*** from '@angular/platform-browser';
import ***REMOVED*** NgModule ***REMOVED*** from '@angular/core';
import ***REMOVED*** FormsModule ***REMOVED*** from '@angular/forms';
import ***REMOVED*** HttpClientModule ***REMOVED*** from '@angular/common/http';
import ***REMOVED*** RouterModule ***REMOVED*** from '@angular/router';

import ***REMOVED*** AppComponent ***REMOVED*** from './app.component';
import ***REMOVED*** NavMenuComponent ***REMOVED*** from './nav-menu/nav-menu.component';
import ***REMOVED*** HomeComponent ***REMOVED*** from './home/home.component';
import ***REMOVED*** CounterComponent ***REMOVED*** from './counter/counter.component';
import ***REMOVED*** FetchDataComponent ***REMOVED*** from './fetch-data/fetch-data.component';

@NgModule(***REMOVED***
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition(***REMOVED*** appId: 'ng-cli-universal' ***REMOVED***),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      ***REMOVED*** path: '', component: HomeComponent, pathMatch: 'full' ***REMOVED***,
      ***REMOVED*** path: 'counter', component: CounterComponent ***REMOVED***,
      ***REMOVED*** path: 'fetch-data', component: FetchDataComponent ***REMOVED***,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
***REMOVED***)
export class AppModule ***REMOVED*** ***REMOVED***
