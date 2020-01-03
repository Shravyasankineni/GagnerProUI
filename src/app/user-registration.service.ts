import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {
  constructor(private http: HttpClient) {  }

  public doRegistration(user) {
    return this.http.post('http://localhost:9199/students/save', user, {responseType: 'text' as 'json'});
  }

  public stdDoRegistration(std) {
    return this.http.post('http://localhost:9199/students/save', std, {responseType: 'text' as 'json'});
  }

  public prfDoRegistration(prf) {
    return this.http.post('http://localhost:9199/students/save', prf, {responseType: 'text' as 'json'});
  }

  public getUsers() {
    return this.http.get('http://localhost:9199/students/all');
  }

  public getUserByEmail(email) {
    return this.http.get('http://localhost:9090//findUser/' + email);
  }
  public deleteUser(id) {
    return this.http.delete('http://localhost:9199/students/' + id);
  }
}
