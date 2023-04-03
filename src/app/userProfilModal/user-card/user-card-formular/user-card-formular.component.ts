import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-card-formular',
  templateUrl: './user-card-formular.component.html',
  styleUrls: ['./user-card-formular.component.scss']
})
export class UserCardFormularComponent {
  passwordChange = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  onSubmit(){

  }
}
