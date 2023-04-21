import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

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
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"), "pas de token parce qu'on a vidé le localStorage");
      })
      .catch(err => console.log(err))
  }
}
