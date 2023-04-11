import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonce!: Annonce;
  annonces!: Annonce[];//tableau d'annonces
  annonceSelectionnee!: Annonce ;

  constructor(private annonceService : AnnonceService,private router: Router) { 

  }
  // ngOnInit recupère les annonces à partir du service
  ngOnInit() : void {
    // inscription a l'observable de la methode listeAnnonce() qui fait appel a l api rest
   this.annonceService.listeAnnonce().subscribe(ann => {
    console.log(ann);
    // affecte le resultat de la methode listeAnnonce ann à la liste d'annonce
    this.annonces = ann;
    
   });


}
supprimerAnnonce(annonce: Annonce) {
// console.log(annonce);
let conf = confirm("Confimer la suppression de l'annonce");
if(conf)
this.annonceService.deleteAnnonce(annonce);
}

//methode pour selectioner une annonce dans la liste
onSelectedAnnonce(id: number): void {
  console.log("Annonce sélectionnée :", id);
  this.annonceService.consultAnnonce(id).subscribe((annonce) => {
    this.annonceSelectionnee = annonce;
    console.log("Annonce sélectionnée :", annonce);
    this.router.navigate(['barters',id]);
  });
}


}