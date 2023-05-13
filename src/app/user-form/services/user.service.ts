import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-form.model';


const baseUrl = 'http://localhost:8080/signup';

const baseUrl2 = 'http://localhost:8080/users';

const baseUrl3 = 'http://localhost:8080/users/';


// const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) {}

    createUser(user: any): Observable<any> {
        return this.http.post(baseUrl, user);
    } 

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(baseUrl2);
    }

    deleteUser(id:number): Observable<User> {
        return this.http.delete<User>(baseUrl3+id+"/profil");
    }

} 
