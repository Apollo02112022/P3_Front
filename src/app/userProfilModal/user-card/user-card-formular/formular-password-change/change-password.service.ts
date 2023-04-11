import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  // constante pour dire a Angular que les données retournées sont sous format Json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // ----------------constante pour l'exécution des appels api--------------//
  userid: number = 1;
  url: string = "http://localhost:8080/users/" + this.userid + "/profil";
  //------------------------- section à modifier --------------------------// 

  constructor(private http: HttpClient) { }


  // Méthode pour vérifier le mot de passe actuel dans la base de données
  checkCurrentPassword(currentPassword: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/check-password`, { password: currentPassword }, this.httpOptions);
  }
  
  updatePassword(newPassword: string): Observable<boolean> {  
    return this.http.put<boolean>(`${this.url}/update-password`, { password: newPassword }, this.httpOptions);
  }
}
