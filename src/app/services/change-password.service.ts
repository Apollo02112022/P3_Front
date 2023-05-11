import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
 
  constructor(private http: HttpClient,private token: TokenService) { }

  // constante pour dire a Angular que les données retournées sont sous format Json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // ----------------constante pour l'exécution des appels api--------------//
  url: string = environment.apiUrlUser + this.token.userIdOnToken() + environment.userProfil;
  //------------------------- section à modifier --------------------------// 


  // Méthode pour vérifier le mot de passe actuel dans la base de données
  checkCurrentPassword(currentPassword: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/check-password`, { password: currentPassword }, this.httpOptions);
  }
  // Méthode pour changer le mot de passe dans la base de données
  updatePassword(newPassword: string): Observable<boolean> {  
    return this.http.put<boolean>(`${this.url}/update-password`, { password: newPassword }, this.httpOptions);
  }
}
