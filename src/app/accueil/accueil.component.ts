import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  welcome : string = "Bienvenue sur le site Trocoeur. Ici vous allez pouvoir faire des échanges alimentaires entre particuliers.";
  how: string = "Comment ça marche ?";
  consult : string = "Consultez nos offres";

  constructor (private router: Router) {}

  select() {
    this.router.navigate(["/barters"]);
  }

}
