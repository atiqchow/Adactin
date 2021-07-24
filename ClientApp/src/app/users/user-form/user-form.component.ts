import ***REMOVED*** Component, EventEmitter, OnInit, Output ***REMOVED*** from '@angular/core';
import ***REMOVED*** UsersService ***REMOVED*** from '../../shared/users.service';
import ***REMOVED*** NgForm ***REMOVED*** from '@angular/forms';
import ***REMOVED*** Users ***REMOVED*** from '../../shared/users.model';
import ***REMOVED*** MatDatepickerInputEvent ***REMOVED*** from '@angular/material';
 import * as _moment from 'moment';
import ***REMOVED*** Moment ***REMOVED*** from 'moment';
import * as moment from 'moment';
@Component(***REMOVED***
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
***REMOVED***)
export class UserFormComponent implements OnInit ***REMOVED***

  age:number;
  constructor(public service: UsersService) ***REMOVED***
     
***REMOVED***

  ngOnInit(): void ***REMOVED***
***REMOVED***

  handleDOBChange(event) ***REMOVED***
    const m: Moment = event.value;
    
    const userDOB = moment('1989/11/17', 'YYYY/M/D');

    this.age = moment().diff(userDOB, 'years')

    console.log(this.age)
***REMOVED***
  onSubmit(form: NgForm) ***REMOVED***
    if(this.service.formData.id == 0) //we will use the id as identifier for updating or insertion
    this.insertRecord(form);
    else
    this.updateRecord(form);
***REMOVED***

  insertRecord(form:NgForm) ***REMOVED***
    this.service.postMember().subscribe(
      res => ***REMOVED***
        this.resetForm(form);
        this.service.refreshList();
  ***REMOVED***,
      err => ***REMOVED***
        console.log(err);
  ***REMOVED***
    );
***REMOVED***

  updateRecord(form: NgForm) ***REMOVED***
    this.service.putMember().subscribe(
      res => ***REMOVED***
        this.resetForm(form);
        this.service.refreshList();
  ***REMOVED***,
      err => ***REMOVED***
        console.log(err);
  ***REMOVED***
    );
***REMOVED***

  resetForm(form: NgForm) ***REMOVED***
    form.form.reset();
    this.service.formData = new Users();
***REMOVED***
***REMOVED***
