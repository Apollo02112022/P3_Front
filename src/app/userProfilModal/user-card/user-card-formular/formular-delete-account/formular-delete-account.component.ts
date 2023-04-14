import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formular-delete-account',
  templateUrl: './formular-delete-account.component.html',
  styleUrls: ['./formular-delete-account.component.scss']
})
export class FormularDeleteAccountComponent {
  deleteAccount: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.deleteAccount = this.formBuilder.group({
      actualPassword: ['', [Validators.required, this.passwordValidator()]]
    });
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // passwordRegex est utilisé pour valider la force d'un mot de passe. 
      // Il assure qu'un mot de passe satisfait les critères suivants :
      //1: doit contenir au moins une lettre majuscule (A-Z)
      //2: doit contenir au moins un chiffre (0-9)
      //3: doit contenir au moins un caractère spécial (@$!%*?&)
      //4: doit contenir uniquement des lettres (majuscules et minuscules), 
      //   des chiffres et les caractères spéciaux mentionnés ci-dessus
      //5: doit comporter au moins 8 caractères
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      // La méthode .test() vérifie si la valeur du champ de saisie de mot de passe correspond
      // à la regex. 
      // Si c'est le cas, elle retourne true, sinon elle retourne false
      const valid = passwordRegex.test(control.value);
      console.log(control.value)
      //On verifie si le mot de passe respecte le regex si oui on renvoie null si non { passwordRequirements: true }
      return valid ? null : { passwordRequirements: true };
    };
  }

  onSubmit() {
    if (this.deleteAccount.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }


    // Traitement de la soumission du formulaire ici
    console.log(this.deleteAccount.value);
  }
}
