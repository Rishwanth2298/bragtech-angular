import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
_url='https://brag-tech.herokuapp.com/enroll';
  constructor(private _http:HttpClient) { }

  enroll(user:User) {
    return this._http.post<any>(this._url,user);
  }
  sendEmail(url: string, data: { name: any; email: any; phone: any; message: any; }) {
    return this._http.post(url, data);
  }
}
 
