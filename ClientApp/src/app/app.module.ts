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
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MAT_DATE_FORMATS, NativeDateAdapter, DateAdapter, MatDateFormats
***REMOVED*** from '@angular/material';

const MY_DATE_FORMATS = ***REMOVED***
  parse: ***REMOVED***
    dateInput: ***REMOVED*** day: 'numeric', month: 'numeric', year: 'numeric' ***REMOVED***
***REMOVED***
  display: ***REMOVED***
    dateInput: 'input',
    monthYearLabel: ***REMOVED*** year: 'numeric', month: 'short' ***REMOVED***,
    dateA11yLabel: ***REMOVED*** year: 'numeric', month: 'long', day: 'numeric' ***REMOVED***,
    monthYearA11yLabel: ***REMOVED*** year: 'numeric', month: 'long' ***REMOVED***,
***REMOVED***
***REMOVED***;

export class AppDateAdapter extends NativeDateAdapter ***REMOVED***

  format(date: Date, displayFormat: Object): string ***REMOVED***
    if (displayFormat === 'input') ***REMOVED***
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `$***REMOVED***day***REMOVED***/$***REMOVED***month***REMOVED***/$***REMOVED***year***REMOVED***`;
***REMOVED*** else ***REMOVED***
      return date.toDateString();
***REMOVED***
***REMOVED***
***REMOVED***

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
  providers: [***REMOVED*** provide: DateAdapter, useClass: AppDateAdapter ***REMOVED***,
    ***REMOVED*** provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS ***REMOVED***],
  bootstrap: [AppComponent]
***REMOVED***)
export class AppModule ***REMOVED*** ***REMOVED***
