import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'; 

import { userValidator } from './user.validator';  /*J'injecte mon validator personnel pour le nom et le prénom.*/ 

import { usernameValidator } from './username.validator'; /*J'injecte mon validator personnel pour le pseudo.*/ 

import { passwordValidator } from './password.validator'; /*J'injecte mon validator personnel pour le mot de passe.*/ 

import { pictureValidator } from './picture.validator'; /*J'injecte mon validator personnel pour la photo (format jpg uniquement).*/ 


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form!: FormGroup; /*Déclaration de la variable qui contiendra l'objet du formulaire (son type est FormGroup).*/

  constructor() {} 
  
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
      prenom: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
      pseudo: new FormControl("", [Validators.required, Validators.maxLength(10), usernameValidator]),
      photo: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      motDePasse: new FormControl("", [Validators.required, Validators.minLength(12), passwordValidator]), 
      confirm: new FormControl("", [Validators.required, Validators.minLength(12), passwordValidator])
    });

} 

  onSubmitForm() {
    console.log(this.form.value); /*Méthode qui envoie le contenu du formulaire sur la console. L'attribut value permet d'accéder au contenu du formulaire. */
  } 

}

// J'utilise la méthode  group, en lui passant un objet :

// - les clés de l'objet correspondent aux noms des champs;

// - les valeurs de l'objet correspondent à la configuration de chaque champ (pour l'instant, je passe uniquement null  pour dire 
// que la valeur par défaut de ces champs est  null).