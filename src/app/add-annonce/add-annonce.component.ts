import { Component, Injectable, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// constante pour dire a Angular que les données retournées sont sous format Json
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.scss']
})
export class AddAnnonceComponent implements OnInit {
  
  newAnnonce = new Annonce();  // création d'une nouvelle instance d'Annonce
  message!: string;            // ajout d'un attribut de message

  constructor(private annonceService: AnnonceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    
  }

  addAnnonce() {
    // méthode appelée lorsqu'un utilisateur ajoute une nouvelle annonce

    if (!this.checkDescriptionLength()) {
      return;
    }
    // appel du service AnnonceService pour ajouter l'annonce dans la base de données
    this.annonceService.addOneAnnonce(this.newAnnonce).subscribe(ann => {

      // rediriger l'utilisateur vers la page des annonces une fois que l'annonce a été ajoutée avec succès
      this.router.navigate(['barters']);
    });
  }

  // méthode pour valider la longueur requise min/max de la description de l'annonce
  checkDescriptionLength(): boolean {
    if (this.newAnnonce.description.length < 10) {
      this.message = "La description est trop courte (minimum 10 caractères)";
      return false;
    } else if (this.newAnnonce.description.length > 250) {
      this.message = "La description est trop longue (maximum 250 caractères)";
      return false;
    } else {
      return true;
    }
  }
}