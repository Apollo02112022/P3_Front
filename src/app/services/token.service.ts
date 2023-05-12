import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string | null = '';

  constructor(private router: Router) {}

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): any {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return jwt_decode(token);
    } else {
      console.log("NNNNNNNNNOOOOOTTTTTTTTTT   TTOOOKKKEENNNN");
      return null;
    }
  }

  testWithToken = (url: string): any => {
    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}`, "Content-Type": "application/json" });
    const options = {
      headers: header,
    };
    fetch(`http://localhost:8080/${url}`, options)
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }


  //verification du token valide ou non valide
  tokenValid(): boolean {
    const token = localStorage.getItem("token"); // Récupérer le token du localStorage
    if (!token) {
      alert("Pour accèder, connectez-vous ou créez un compte.")
      // Si le token n'est pas présent dans le localStorage
      return false;
    }
    // Si le token est valide
    return true;
  }
  
  
  userIdOnToken():any {
    if(localStorage.getItem("token")){
      const token=this.getDecodedToken()
      const userid = token.userId;
      console.log(userid)
      return userid
      }else{
        return null
      }
  }
}









