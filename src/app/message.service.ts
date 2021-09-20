import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 
@Injectable()
export class MessageService {
  _http: any;
 
  constructor(private_http: HttpClient) {}
 
  sendMessage(body: any) {
    return this._http.post('https://brag-tech.herokuapp.com/', body);
  }
}