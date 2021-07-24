import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }
  readonly _baseUrl = "https://localhost:44393/api/User";
  readonly _baseUrlOccupation = "https://localhost:44393/api/Occupation";

  formData: Users = new Users();
  list: Users[];
  
  postMember() {
    return this.http.post(this._baseUrl ,this.formData);
  }

  putMember() {
    return this.http.put(`${this._baseUrl}/${this.formData.id}` ,this.formData);
  }
  getOccupation() {
    return this.http.get(`${this._baseUrlOccupation}`);
  }

  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Users[]);
  }

}
