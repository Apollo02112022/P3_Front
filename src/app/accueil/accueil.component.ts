import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  welcome = "Bienvenue sur le site Trocoeur. Ici vous allez pouvoir faire des échanges alimentaires entre particuliers."
  how = "Comment ça marche ?"
  consult = "Consultez nos offres"
}
