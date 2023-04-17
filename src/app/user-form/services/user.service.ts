import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-form.model';


const baseUrl = 'http://localhost:8080/api/signup';

const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    createUser(user: any): Observable<any> {
        console.log(user);
        return this.http.post(baseUrl, user);
    } 

} 
