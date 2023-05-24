import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserlogoService {

  constructor(private http : HttpClient,private token : TokenService) { }

  pseudo:string = ""
  imageURL = environment.apiUrlUser;
  image:null | string | ArrayBuffer = "assets/icons/utilisateur-du-cercle.png"



  getUserPicture(imageURL: string): Observable<Blob> {
  
    const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem("token")}`});
  
    return this.http.get(imageURL,  { headers, responseType:'blob' })
  }

  getPseudo():string{
    return this.pseudo
  }
  getImage():null | string | ArrayBuffer{
    return this.image
  }

}
