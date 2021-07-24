import ***REMOVED*** NgModule ***REMOVED*** from '@angular/core';
import ***REMOVED*** BrowserModule ***REMOVED*** from '@angular/platform-browser'; 
import ***REMOVED*** AppRoutingModule ***REMOVED*** from './app-routing.module';
import ***REMOVED*** AppComponent ***REMOVED*** from './app.component';
import ***REMOVED*** UsersComponent ***REMOVED*** from './users/users.component';
import ***REMOVED*** UserFormComponent ***REMOVED*** from './users/user-form/user-form.component';
import ***REMOVED*** FormsModule ***REMOVED*** from '@angular/forms';
import ***REMOVED*** HttpClientModule ***REMOVED*** from '@angular/common/http';
import ***REMOVED*** BrowserAnimationsModule ***REMOVED*** from '@angular/platform-browser/animations';
import ***REMOVED***
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule
***REMOVED*** from '@angular/material';

@NgModule(***REMOVED***
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
***REMOVED***)
export class AppModule ***REMOVED*** ***REMOVED***
