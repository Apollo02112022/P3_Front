import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChangeMailService {

    constructor(private http:HttpClient){}

  // constante pour dire a Angular que les données retournées sont sous format Json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

    // ----------------constante pour l'exécution des appels api--------------//
    userid: number = 1;
    url: string = "http://localhost:8080/users/" + this.userid + "/profil";
    //------------------------- section à modifier --------------------------// 

// Méthode pour vérifier si le mail existe déjà dans la base de données
    checkMailIfExist(mail: string): Observable<boolean> {
        return this.http.post<boolean>(`${this.url}/check-mail`, { 'mail': mail }, this.httpOptions);
    }
      // Méthode pour changer le mot de passe dans la base de données
  updateMail(mail: string): Observable<boolean> {  
    return this.http.put<boolean>(`${this.url}/update-mail`, { 'mail': mail }, this.httpOptions);
  }

}

