import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  fail: boolean = false;
  // pseudoToken: String = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tokenService: TokenService) {}

  // testToken() {
  //   const decodedToken = this.tokenService.getDecodedToken();
  //   this.pseudoToken = decodedToken ? decodedToken : null;
  //   console.log(this.pseudoToken);
  // }

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
        if (token != undefined) {
          localStorage.setItem("token", token);
          this.fail = false;
          // this.router.navigate(["/users/1/profil"])
          console.log(token, "Connecté avec Success !")
          this.tokenService.setToken(token);
        } else {
          this.fail = true;
        }
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

  loginFail() {
    this.fail!
  }

  token() {
    this.tokenService.getDecodedToken();
    this.tokenService.getDecodedToken();
    console.log(this.tokenService.getDecodedToken());
    const userId: number = this.tokenService.getDecodedToken().id;
    const sub: string = this.tokenService.getDecodedToken().sub;
    console.log(userId);
    console.log(sub);
  }
}
