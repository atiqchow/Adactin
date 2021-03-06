import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { Occupation } from './occupation.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
  }
  readonly _baseUrl = "https://localhost:44356/api/User";
  readonly _baseUrlOccupation = "https://localhost:44356/api/Occupation";

  formData: Users = new Users();
  list: Users[];
  
  postMember() {
    return this.http.post(this._baseUrl ,this.formData);
  }

  putMember() {
    return this.http.put(`${this._baseUrl}/${this.formData.id}` ,this.formData);
  }
  getOccupation(): Observable<Occupation[]> {
    return this.http.get<Occupation[]>(this._baseUrlOccupation);
  }

  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Users[]);
  }

}
