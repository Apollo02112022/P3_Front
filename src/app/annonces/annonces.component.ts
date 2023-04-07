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

  
  annonces!: Annonce[];//tableau d'annonces
  
  constructor(private annonceService : AnnonceService) { 
 // this.annonces = this.annonceService.listeAnnonce();

  }
  // ngOnInit recupère les annonces à partir du service
  ngOnInit() : void {
    // inscription a l'observable de la methode listeAnnonce() qui fait appel a l api rest
   this.annonceService.listeAnnonce().subscribe(ann => {
    console.log(ann);
    // affecte le resultatde la methode listeAnnonce ann à la liste d'annonce
    this.annonces = ann;
   });


}
supprimerAnnonce(annonce: Annonce) {
// console.log(annonce);
let conf = confirm("Confimer la suppression de l'annonce");
if(conf)
this.annonceService.deleteAnnonce(annonce);
}

}