import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'; 

import { userValidator } from './user.validator';  /*J'injecte mon validator personnel pour le nom et le prénom.*/ 

import { usernameValidator } from './username.validator'; /*J'injecte mon validator personnel pour le pseudo.*/ 

import { passwordValidator } from './password.validator'; /*J'injecte mon validator personnel pour le mot de passe.*/ 

import { pictureValidator } from './picture.validator'; /*J'injecte mon validator personnel pour la photo (format jpg uniquement).*/ 

import { numberValidator } from './number.validator';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})


export class UserFormComponent {

  form: FormGroup; /*Déclaration de la variable qui contiendra l'objet du formulaire (son type est FormGroup).*/

  constructor() {this.form = new FormGroup({
    lastname: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
    firstname: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
    username: new FormControl("", [Validators.required, Validators.maxLength(10), usernameValidator]),
    picture: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    city: new FormControl("", [Validators.required, userValidator()]),
    county: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(5), numberValidator()]),
    password: new FormControl("", [Validators.required, Validators.minLength(12), passwordValidator]), 
    confirmation: new FormControl("", [Validators.required, Validators.minLength(12), passwordValidator]) 
  }, { validators: this.mustMatch("password", "confirmation") })
  } 

  mustMatch(password: string, confirmation: string) {
    return (control: AbstractControl) => {
      const passwordControl = control.get(password);
      const confirmationControl = control.get(confirmation);
  
      if (confirmationControl?.errors && !confirmationControl.errors['mustMatch']) {
        return null;
      }
  
      if (passwordControl?.value !== confirmationControl?.value) {
        confirmationControl?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmationControl?.setErrors(null);
        return null;
      }
    };
  }

  onSubmitForm() {
    console.log(this.form.value); /*Méthode qui envoie le contenu du formulaire sur la console. L'attribut value permet d'accéder au contenu du formulaire. */
  } 

}
 

// // J'utilise la méthode  group, en lui passant un objet :

// // - les clés de l'objet correspondent aux noms des champs;

// // - les valeurs de l'objet correspondent à la configuration de chaque champ.
  



  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     nom: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
  //     prenom: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
  //     pseudo: new FormControl("", [Validators.required, Validators.maxLength(10), usernameValidator]),
  //     photo: new FormControl(""),
  //     email: new FormControl("", [Validators.required, Validators.email]),
  //     motDePasse: new FormControl("", [Validators.required, Validators.minLength(12), passwordValidator]), 
  //     confirmation: new FormControl("", [Validators.required, Validators.minLength(12), passwordValidator]) 
  //   });
  // }