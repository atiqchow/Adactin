import ***REMOVED*** Component, EventEmitter, OnInit, Output ***REMOVED*** from '@angular/core';
import ***REMOVED*** UsersService ***REMOVED*** from '../../shared/users.service';
import ***REMOVED*** NgForm ***REMOVED*** from '@angular/forms';
import ***REMOVED*** Users ***REMOVED*** from '../../shared/users.model';
import ***REMOVED*** MatDatepickerInputEvent ***REMOVED*** from '@angular/material';
 import * as _moment from 'moment';
import ***REMOVED*** Moment ***REMOVED*** from 'moment';
import * as moment from 'moment';
import ***REMOVED*** BehaviorSubject ***REMOVED*** from 'rxjs';
import ***REMOVED*** Occupation ***REMOVED*** from '../../shared/occupation.model';
 
 
@Component(***REMOVED***
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
***REMOVED***)
export class UserFormComponent implements OnInit ***REMOVED***
  occupationValue: number;
  age: number;
  premium: number;
  firstname: string;
  showResult: boolean;
  currentoccupationFactor = '0';
  BirthDate: Date;
  occupations: Occupation[] = [];
  showError: boolean;
  constructor(public service: UsersService) ***REMOVED***
     
***REMOVED***

  ngOnInit(): void ***REMOVED***
    this.BirthDate = new Date();
    this.service.getOccupation().subscribe(res => ***REMOVED***
      this.occupations = res;
***REMOVED***);

***REMOVED***

  handleDOBChange(event) ***REMOVED***
    const m: Moment = event.value;
    
    const userDOB = moment('1989/11/17', 'YYYY/M/D');

    this.age = moment().diff(userDOB, 'years')

    
***REMOVED***
  onSubmit(form: NgForm) ***REMOVED***
    
    this.showError = form.invalid;     
    const deathInsured = form.value.deathInsured;
    if (deathInsured > 0 && this.occupationValue > 0 && this.age > 0) ***REMOVED***
      this.premium = (deathInsured * this.occupationValue * this.age) / 1000 * 12
      this.showResult = true;
***REMOVED***
***REMOVED***
  setFactor(filterVal: any) ***REMOVED***   
    this.occupationValue = filterVal;
***REMOVED***
  
  resetForm(form: NgForm) ***REMOVED***
    
    form.setValue(***REMOVED***
      firstName: '', lastName: '', deathInsured: '0', occupation:'0'
  ***REMOVED***);
    this.showResult = false;
***REMOVED***
  
***REMOVED***
