import { Injectable } from '@angular/core';
import jwtDecode, * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private token: String) {}

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): any {
    return this.token;
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    } else {
      return null;
    }
  }
}
