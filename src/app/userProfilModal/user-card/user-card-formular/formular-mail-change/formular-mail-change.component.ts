import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formular-mail-change',
  templateUrl: './formular-mail-change.component.html',
  styleUrls: ['./formular-mail-change.component.scss']
})
export class FormularMailChangeComponent {
  mailChange: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.mailChange = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.mailChange.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }

    // Traitement de la soumission du formulaire ici
    console.log(this.mailChange.value);
  }
}
