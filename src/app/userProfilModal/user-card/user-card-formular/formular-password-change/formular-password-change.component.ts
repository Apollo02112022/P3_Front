import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ChangePasswordService } from './change-password.service';

@Component({
  selector: 'app-formular-password-change',
  templateUrl: './formular-password-change.component.html',
  styleUrls: ['./formular-password-change.component.scss']
})
export class FormularPasswordChangeComponent implements OnInit {

  passwordForm!: FormGroup;


  constructor(private fb: FormBuilder, private changePasswordService: ChangePasswordService) { }

  ngOnInit(): void {
    // construction du formulaire reactif grâce à FormBuilder
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required, this.passwordValidator()]],
      newPassword: ['', [Validators.required, this.passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }
      ,
      {
        validators: this.matchingPasswordsValidator()
      });
    console.log("@@@@OnInit@@@@", this.passwordForm, "123!A@azer")
  }

  // Validateur personnalisé pour le champ "newPassword"
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
      //On verifie si le mot de passe respecte le regex si oui on renvoie null si non { passwordRequirements: true }
      return valid ? null : { passwordRequirements: true };
    };
  }
  // Validateur personnalisé pour vérifier que les champs "newPassword" et "confirmPassword" ont la même valeur
  matchingPasswordsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // Get first control value
      const value1 = control.get('newPassword')?.value;
      // Get second control value
      const value2 = control.get('confirmPassword')?.value;

      return value1 === value2 ? null : { passwordMatching: true };
    };
  }


  onSubmit() {
    if (this.passwordForm.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }

    // Traitement de la soumission du formulaire ici
    // console.log("@@@@OnSUBMIT@@@", this.passwordForm.value);
    const currentPassword = this.passwordForm.get('currentPassword')?.value;
    const newPassword = this.passwordForm.get('newPassword')?.value;
  
    this.changePasswordService.checkCurrentPassword(currentPassword).subscribe(check => {
      if (check) {
        this.changePasswordService.updatePassword(newPassword).subscribe(() => {
          console.log('password changed');
        });
      }else{

        console.log('password is false')
      }
    });
  }
}
