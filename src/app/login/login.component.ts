import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { environment } from 'src/environments/environment.prod';
import { UserlogoService } from '../services/userlogo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  tokenReceveidFail: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private tokenService: TokenService,private userLogoService : UserlogoService) {}


    registerForm = new FormGroup({
      pseudo: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });

   login() {
    const { pseudo, password } = this.registerForm.value;
    const data = { pseudo, password };
    fetch(environment.apiUrlLogin, {
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
          this.getUserPseudoAndPictureForHederandFooter()
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
    const userId: number = this.tokenService.getDecodedToken().userId;
    const sub: string = this.tokenService.getDecodedToken().sub;

  }
  toSignup() {
    this.router.navigate(["/signup"]);
  }
  adminToken():any {
    if(localStorage.getItem("token")){
      const token=this.tokenService.getDecodedToken()
      const role = token.role;
      return role
      }else{
        return null
      }
  }

  getUserPseudoAndPictureForHederandFooter(){

    if(this.tokenService.getDecodedToken().pseudo == null){
      
        this.userLogoService.pseudo = ""
        this.userLogoService.image = "assets/icons/utilisateur-du-cercle.png"
      }
  
      this.userLogoService.pseudo = this.tokenService.getDecodedToken().pseudo;
  
      this.userLogoService.getUserPicture(this.userLogoService.imageURL + this.tokenService.userIdOnToken() + "/picture").subscribe(
        (data: Blob) => {
          const reader = new FileReader(); // création d'un objet FileReader pour lire l'image sous forme de blob
          reader.readAsDataURL(data); // lit le blob sous forme d'URL
          reader.onloadend = () => {
            this.userLogoService.image = reader.result; // stock l'URL dans la variable "image"
          };
        },
        error => {
          console.log(error);
        }
      );
  }

}
