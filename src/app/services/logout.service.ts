import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout() {
    console.log('llloooogggooouuuuttttttt 1');
    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}` });
    const options = {
      headers: header,
      method: 'POST',
    };
    fetch("http://localhost:8080/custumLogout", options)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        alert("Vous êtes deconnecté");
        this.router.navigate(['/accueil']);
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"), "pas de token parce qu'on a vidé le localStorage");
        
        location.reload()
      })
      .catch(err => console.log(err))
  }
}
