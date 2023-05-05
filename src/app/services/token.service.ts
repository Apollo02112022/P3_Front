import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = '';

  constructor(private router: Router) {}

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): any {
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
      alert("Creez un compte ou connectez vous")
      // Si le token n'est pas présent dans le localStorage
      return false;
    }
    // Si le token est valide
    return true;
  }
  canActivate(): boolean {
    if (!this.tokenValid()) {
      this.router.navigate(['login']); // Redirige l'utilisateur vers la page de connexion si le token est invalide
      return false;
    }
    return true; // Autorise l'accès si le token est valide
  }
}









