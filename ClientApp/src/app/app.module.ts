import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MAT_DATE_FORMATS, NativeDateAdapter, DateAdapter, MatDateFormats
} from '@angular/material';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return date.toDateString();
    }
  }
}

@NgModule({
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
  providers: [{ provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
