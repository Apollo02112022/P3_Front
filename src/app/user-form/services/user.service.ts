import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user-form.model';


const baseUrl = environment.apiUrlSignup;

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
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      
        return this.http.get<User[]>(baseUrl2, { headers });
      }

    deleteUser(id:number): Observable<User> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.delete<User>(baseUrl3+id+"/profil",{ headers });
    }

} 
