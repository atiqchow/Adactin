import ***REMOVED*** Injectable ***REMOVED*** from '@angular/core';
import ***REMOVED*** Users ***REMOVED*** from './users.model';
import ***REMOVED*** HttpClient ***REMOVED*** from "@angular/common/http";

@Injectable(***REMOVED***
  providedIn: 'root'
***REMOVED***)
export class UsersService ***REMOVED***

  constructor(private http: HttpClient) ***REMOVED***
    
***REMOVED***
  readonly _baseUrl = "https://localhost:44393/api/User";

  formData: Users = new Users();
  list: Users[];
  
  postMember() ***REMOVED***
    return this.http.post(this._baseUrl ,this.formData);
***REMOVED***

  putMember() ***REMOVED***
    return this.http.put(`$***REMOVED***this._baseUrl***REMOVED***/$***REMOVED***this.formData.id***REMOVED***` ,this.formData);
***REMOVED***
 

  refreshList() ***REMOVED***
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Users[]);
***REMOVED***

***REMOVED***
