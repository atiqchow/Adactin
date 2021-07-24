import ***REMOVED*** Component, OnInit ***REMOVED*** from '@angular/core';
import ***REMOVED*** Users ***REMOVED*** from '../shared/users.model';
import ***REMOVED*** UsersService ***REMOVED*** from '../shared/users.service';

@Component(***REMOVED***
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
***REMOVED***)
export class UsersComponent implements OnInit ***REMOVED***

  constructor(public service: UsersService) ***REMOVED*** ***REMOVED***

  ngOnInit(): void ***REMOVED***
    this.service.refreshList();
***REMOVED***

  populateForm(selectedRecord: Users) ***REMOVED***
    this.service.formData = Object.assign(***REMOVED******REMOVED***,selectedRecord);
***REMOVED***

  
***REMOVED***
