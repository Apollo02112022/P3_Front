import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout() {
    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}` });
    const options = {
      headers: header,
      method: 'POST',
    };
    fetch(environment.apiUrlLogout, options)
      .then(res => res.json())
      .then(response => {
        response;
        alert("Vous êtes deconnecté");
        localStorage.removeItem("token");
        
        location.reload()
        this.router.navigate(['/accueil'])
      })
      .catch(err => console.log(err))
  }
}
