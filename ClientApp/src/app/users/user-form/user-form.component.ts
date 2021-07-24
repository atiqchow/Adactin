import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { NgForm } from '@angular/forms';
import { Users } from '../../shared/users.model';
import { MatDatepickerInputEvent } from '@angular/material';
 import * as _moment from 'moment';
import { Moment } from 'moment';
import * as moment from 'moment';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {

  age:number;
  constructor(public service: UsersService) {
     
  }

  ngOnInit(): void {
  }

  handleDOBChange(event) {
    const m: Moment = event.value;
    
    const userDOB = moment('1989/11/17', 'YYYY/M/D');

    this.age = moment().diff(userDOB, 'years')

    console.log(this.age)
  }
  onSubmit(form: NgForm) {
    if(this.service.formData.id == 0) //we will use the id as identifier for updating or insertion
    this.insertRecord(form);
    else
    this.updateRecord(form);
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
    form.form.reset();
    this.service.formData = new Users();
  }
}
