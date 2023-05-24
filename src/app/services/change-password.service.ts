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


  // ----------------constante pour l'exécution des appels api--------------//
  url: string = environment.apiUrlUser + this.token.userIdOnToken() + environment.userProfil;
  //------------------------- section à modifier --------------------------// 


  // Méthode pour vérifier le mot de passe actuel dans la base de données
  checkCurrentPassword(currentPassword: string): Observable<boolean> {
    const token = localStorage.getItem("token");
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<boolean>(`${this.url}/check-password`,{ password : currentPassword}, options);
  }
  // Méthode pour changer le mot de passe dans la base de données
  updatePassword(newPassword: string): Observable<boolean> { 
        const token = localStorage.getItem("token");
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.put<boolean>(`${this.url}/update-password`, { password : newPassword}, options);
  }
}
