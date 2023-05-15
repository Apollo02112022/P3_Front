import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from 'src/app/services/change-password.service';
import { LogoutService } from 'src/app/services/logout.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/user-form/services/user.service';
import { passwordValidator } from 'src/app/user-form/validators/password.validator';

@Component({
  selector: 'app-formular-delete-account',
  templateUrl: './formular-delete-account.component.html',
  styleUrls: ['./formular-delete-account.component.scss']
})
export class FormularDeleteAccountComponent {
  deleteAccount: FormGroup;

  constructor(private formBuilder: FormBuilder,private checkPasswordService : ChangePasswordService,private userService :UserService,private token : TokenService,private logout : LogoutService) {
    this.deleteAccount = this.formBuilder.group({
      actualPassword: ['', [Validators.required,passwordValidator]]
    });
  }



  onSubmit() {
    if (this.deleteAccount.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }

    // Traitement de la soumission du formulaire ici
    const currentPassword = this.deleteAccount.get('actualPassword')?.value;
  
    this.checkPasswordService.checkCurrentPassword(currentPassword).subscribe(check => {
      if (check) {
        this.eraseUser(this.token.userIdOnToken())
      }
    })
  }

  eraseUser(userid:any) {
    this.userService.deleteUser(userid).subscribe(() => {});
    this.logout.logout()
  } 

}
