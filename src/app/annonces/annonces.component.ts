import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  
  annonces?: Annonce[];//tableau d'annonces
  
  constructor(private annonceService : AnnonceService) { 
  }
  ngOnInit() : void {
    this.annonces = this.annonceService.listeAnnonce();
}
supprimerAnnonce(annonce: Annonce) {
// console.log(annonce);
let conf = confirm("Confimer la suppression de l'annonce");
if(conf)
this.annonceService.deleteAnnonce(annonce);
}

}