import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private httpClient: HttpClient) { }

  get(email: any, password: any){
    return this.httpClient.get('http://localhost:7000/'+email+'/'+password, {responseType:'json'})
  }
}
