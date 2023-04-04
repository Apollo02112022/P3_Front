import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formular-password-change',
  templateUrl: './formular-password-change.component.html',
  styleUrls: ['./formular-password-change.component.scss']
})
export class FormularPasswordChangeComponent implements OnInit {

  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, this.passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.matchingPasswordsValidator('newPassword', 'confirmPassword')
    });
  }

  // Validateur personnalisé pour le champ "newPassword"
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const valid = passwordRegex.test(control.value);
      return valid ? null : {passwordRequirements: true};
    };
  }

  // Validateur personnalisé pour vérifier que les champs "newPassword" et "confirmPassword" ont la même valeur
  matchingPasswordsValidator(newPassword:any, confirmPassword:any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Get first control value
      const value1 = control.get(newPassword)?.value;
      // Get second control value
      const value2 = control.get(confirmPassword)?.value;

      if (!(value1 && value2 && value1 === value2)) {
        return { 'notEqual': { actual: value1, expected: value2 } };
      } else {
        return null;
      }
    };
  }


  onSubmit() {
    if (this.passwordForm.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }

    // Traitement de la soumission du formulaire ici
    console.log(this.passwordForm.value);
  }
}
