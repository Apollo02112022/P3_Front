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

  tokenReceveidFail: boolean = false;

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
          this.tokenReceveidFail = false;
          this.router.navigate(["/barters"])
          alert(" Vous êtes connecté")
          this.tokenService.setToken(token);
        } else {
          this.tokenReceveidFail = true;
        }
      })
      .catch(err => console.log(err));
    }


  // switch la valeur de la variable tokenReceveidFail.
  loginTokenReceveidFail() {
    this.tokenReceveidFail!
  }

  // Décode le token via la librairie jwt_decode dans le tokenService, récupère l'Id et le pseudo de l'utilisateur
  decodeToken() {
    this.tokenService.getDecodedToken();
    this.tokenService.getDecodedToken();
    console.log(this.tokenService.getDecodedToken());
    const userId: number = this.tokenService.getDecodedToken().userId;
    const sub: string = this.tokenService.getDecodedToken().sub;
    console.log(userId);
    console.log(sub);
  }
  toSignup() {
    this.router.navigate(["/signup"]);
  }


}
