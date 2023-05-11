import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
// import { User } from '../models/user-form.model';


const baseUrl = environment.apiUrlSignup;

// const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    createUser(user: any): Observable<any> {
        // console.log(user);
        return this.http.post(baseUrl, user);
    } 

} 
