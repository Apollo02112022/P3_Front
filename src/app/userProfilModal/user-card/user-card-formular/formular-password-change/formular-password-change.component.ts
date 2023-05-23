import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../../../services/change-password.service';
import { passwordValidator } from 'src/app/user-form/validators/password.validator';

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
      currentPassword: ['', [Validators.required, passwordValidator]],
      newPassword: ['', [Validators.required, passwordValidator]],
      confirmPassword: ['', Validators.required]
    }
      ,
      {
        validators: this.matchingPasswordsValidator()
      });
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
    const currentPassword = this.passwordForm.get('currentPassword')?.value;
    const newPassword = this.passwordForm.get('newPassword')?.value;
  
    this.changePasswordService.checkCurrentPassword(currentPassword).subscribe(check => {
      if (check) {
        this.changePasswordService.updatePassword(newPassword).subscribe(() => {
          alert('password changed');
        })
      }else{

        alert('password is false')
      }
    })
  }
}
