import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { userValidator } from './validators/user.validator';  /*J'importe mon validator personnel pour le nom et le prénom.*/
import { usernameValidator } from './validators/username.validator'; /*J'importe mon validator personnel pour le pseudo.*/
import { pictureValidator } from './validators/picture.validator'; /*J'importe mon validator personnel pour la photo (format png uniquement).*/
import { numberValidator } from './validators/number.validator'; /*J'importe mon validator personnel pour le département.*/
import { passwordValidator } from './validators/password.validator'; /*J'importe mon validator personnel pour le mot de passe.*/
import { UserService } from './services/user.service'; /*J'importe mon service.*/
import { toFormData } from '../formData';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})


export class UserFormComponent {

  form: FormGroup; /*Déclaration de la variable qui contiendra l'objet du formulaire (son type est FormGroup).*/


  registered = false;

  notRegistered = false;

  errorPseudo = false;

  errorEmail = false;

  close = false; 

  isChecked = false;


  constructor(private userService: UserService, private router: Router) {

    // J'utilise la méthode group, en lui passant un objet :

    //   - les clés de l'objet correspondent aux noms des champs;

    //   - les valeurs de l'objet correspondent à la configuration de chaque champ.

    this.form = new FormGroup({

      lastname: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
      firstname: new FormControl("", [Validators.required, Validators.maxLength(20), userValidator()]),
      pseudo: new FormControl("", [Validators.required, Validators.maxLength(10), usernameValidator]),
      picture: new FormControl("", [Validators.required, pictureValidator]),
      mail: new FormControl("", [Validators.required, Validators.email]),
      city: new FormControl("", [Validators.required, userValidator()]),
      county: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(5), numberValidator()]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), passwordValidator]),
      confirmation: new FormControl("", [Validators.required, Validators.minLength(8), passwordValidator])
    },

      { validators: this.mustMatch("password", "confirmation") })

  }

  // Méthode qui permet de comparer le password et la confirmation.

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

  // Méthode qui envoie envoie une requête POST pour créer le profil d'un utilisateur.

  onSubmitForm() {
  console.log(this.form.value);

    this.userService.createUser(toFormData(this.form.value)).subscribe(

      {
        next: (res) => {
          console.log(res);
          this.registered = true;
        },
        error: (e) => {
          if (e.error.includes('adresse e-mail')) {
            this.errorEmail = true;
            this.close = false;
          } else if (e.error.includes('pseudo')) {
            this.errorPseudo = true;
            this.close = false;
          } else {
            console.log(e);
            this.notRegistered = true;
          }
        }
      }

    );
  }

  // Méthode pour fermer la fenêtre d'avertissement en cas de doublon du pseudo et/ou de l'adresse mail. 

  closeBtn() {
    this.close = true;
    this.notRegistered = false;
  }
  
}
