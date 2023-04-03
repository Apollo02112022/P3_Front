import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formular-password-change',
  templateUrl: './formular-password-change.component.html',
  styleUrls: ['./formular-password-change.component.scss']
})
export class FormularPasswordChangeComponent {
  passwordChange: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.passwordChange = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  passwordsMatch():boolean{
      const newPassword = this.passwordChange.get('newPassword')?.value;
      const confirmPassword = this.passwordChange.get('confirmPassword')?.value;
      return newPassword === confirmPassword;
    }
  

  onSubmit() {
    if (this.passwordChange.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }

    // Traitement de la soumission du formulaire ici
    console.log(this.passwordChange.value);
  }
}
