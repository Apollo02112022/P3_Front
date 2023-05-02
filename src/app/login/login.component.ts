import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    registerForm = new FormGroup({
      pseudo: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });

   login() {
    const { pseudo, password } = this.registerForm.value;
    const data = { pseudo, password };
    fetch("http://localhost:8080/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => {
        const { token } = response;
        localStorage.setItem("token", token);
        console.log(token, "Connecté avec Success !")
        // this.change();
      })
      .catch(err => console.log(err));
    }

   testWithToken = () => {
    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}`, "Content-Type": "application/json" });
    const options = {
      headers: header,
    };
    fetch("http://localhost:8080/test", options)
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }


  change() {
    this.router.navigate(["/"]);
  }

}
