import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeMailService } from '../../../../services/change-mail.service';

@Component({
  selector: 'app-formular-mail-change',
  templateUrl: './formular-mail-change.component.html',
  styleUrls: ['./formular-mail-change.component.scss']
})
export class FormularMailChangeComponent {
  mailChange: FormGroup;

  constructor(private formBuilder: FormBuilder,private changeMailService : ChangeMailService ) {
    this.mailChange = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.mailChange.invalid) {
      // Arrêter le traitement de la soumission si le formulaire est invalide
      return;
    }

    // Traitement de la soumission du formulaire ici
    //Récuperation de la variable mail du formulaire
    const newMail= this.mailChange.get('mail')?.value;

    // verification si le mail existe déjà ou non et changer le mail si besoin
    this.changeMailService.checkMailIfExist(newMail).subscribe(mailExist => {
      //le mail existe ? si oui retourne le message Ce mail est déjà pris ! 
      mailExist? alert("This mail is already taken !") 
      //si non on peut changer le mail et retourner le message Mail changer !
      :this.changeMailService.updateMail(newMail).subscribe(()=>
      alert("Mail changed to: "+newMail+"."))
      
    })

  }

}
