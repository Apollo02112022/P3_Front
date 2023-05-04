import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string = '';

  // constructor() {}

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
}
