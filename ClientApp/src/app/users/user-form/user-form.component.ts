import ***REMOVED*** Component, OnInit ***REMOVED*** from '@angular/core';
import ***REMOVED*** UsersService ***REMOVED*** from '../../shared/users.service';
import ***REMOVED*** NgForm ***REMOVED*** from '@angular/forms';
import ***REMOVED*** Users ***REMOVED*** from '../../shared/users.model';
 
@Component(***REMOVED***
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
***REMOVED***)
export class UserFormComponent implements OnInit ***REMOVED***
 
  constructor(public service: UsersService) ***REMOVED***
     
***REMOVED***

  ngOnInit(): void ***REMOVED***
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
