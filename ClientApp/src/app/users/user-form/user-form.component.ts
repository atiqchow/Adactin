import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { NgForm } from '@angular/forms';
import { Users } from '../../shared/users.model';
import { MatDatepickerInputEvent } from '@angular/material';
 import * as _moment from 'moment';
import { Moment } from 'moment';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { Occupation } from '../../shared/occupation.model';
 
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {
  occupationValue: number;
  age: number;
  premium: number;
  firstname: string;
  showResult: boolean;
  currentoccupationFactor = '0';
  occupations: Occupation[] = [];
  constructor(public service: UsersService) {
     
  }

  ngOnInit(): void {  

    this.service.getOccupation().subscribe(res => {
      this.occupations = res;
    });
  }

  handleDOBChange(event) {
    const m: Moment = event.value;
    
    const userDOB = moment('1989/11/17', 'YYYY/M/D');

    this.age = moment().diff(userDOB, 'years')

    
  }
  onSubmit(form: NgForm) {    
    const deathInsured = form.value.deathInsured;
    if (deathInsured > 0 && this.occupationValue > 0 && this.age > 0) {
      this.premium = (deathInsured * this.occupationValue * this.age) / 1000 * 12
      this.showResult = true;
    }
  }
  setFactor(filterVal: any) {
   
    this.occupationValue = filterVal;
  }
  insertRecord(form:NgForm) {
    this.service.postMember().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putMember().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }
  resetForm(form: NgForm) {
    
    form.setValue({
      firstName: '', lastName: '', deathInsured: '', occupation:'0'
      });
    this.showResult = false;
  }
  
}
