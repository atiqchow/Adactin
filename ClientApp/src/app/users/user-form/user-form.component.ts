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
  showError: boolean;
  deathInsured: number;
  constructor(public service: UsersService) {
     
  }

  ngOnInit(): void {
    
    this.service.getOccupation().subscribe(res => {
      this.occupations = res;
    });

  }

  handleDOBChange(event) {
    const m: Moment = event.value;     
    var dobYear = moment(m).format('yyyy-MM-DD').substring(0, 4);      
    var currentYear = new Date().getFullYear();   
    this.age = (currentYear - parseInt(dobYear));    
  }

  onSubmit(form: NgForm) {
    
    this.showError = form.invalid;     
    const deathInsured = form.value.deathInsured;
    this.deathInsured = deathInsured;     
    this.calculatePremium();
    
  }

  calculatePremium() {
    this.showResult = (this.deathInsured > 0 && this.occupationValue > 0 && this.age > 0)

    if (this.showResult) {
      this.premium = (this.deathInsured * this.occupationValue * this.age) / 1000 * 12
      this.showError = !this.showResult;
    }
  }
  setFactor(filterVal: any) {   
    this.occupationValue = filterVal;
    this.calculatePremium();
  }
  
  resetForm(form: NgForm) {
    
    form.setValue({
      firstName: '', lastName: '', deathInsured: '0', occupation:'0'
      });
    this.showResult = false;
  }
  
}
