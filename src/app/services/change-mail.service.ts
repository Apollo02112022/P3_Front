import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})
export class ChangeMailService {

    constructor(private http:HttpClient,private token : TokenService){}


    // ----------------constante pour l'exécution des appels api--------------//
    url: string = "http://localhost:8080/users/" + this.token.userIdOnToken() + "/profil";
    //------------------------- section à modifier --------------------------// 

// Méthode pour vérifier si le mail existe déjà dans la base de données
    checkMailIfExist(mail: string): Observable<boolean> {
      const token = localStorage.getItem("token");
      const options = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      };
        return this.http.post<boolean>(`${this.url}/check-mail`, { 'mail': mail }, options);
    }
      // Méthode pour changer le mot de passe dans la base de données
  updateMail(mail: string): Observable<boolean> {  
    const token = localStorage.getItem("token");
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.put<boolean>(`${this.url}/update-mail`, { 'mail': mail }, options);
  }

}

