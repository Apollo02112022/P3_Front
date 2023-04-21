import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
import { userValidator } from '../user-form/validators/user.validator';


@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonce!: Annonce;
  annonces!: Annonce[];//tableau d'annonces
  annonceSelectionnee!: Annonce;
  userid:number = 1

  constructor(private annonceService: AnnonceService, private router: Router) {

  }
  // ngOnInit recupère les annonces à partir de annonceService
  ngOnInit(): void {

    // inscription a l'observable de la methode listeAnnonce() qui fait appel a l api rest
    this.annonceService.listeAnnonce().subscribe(ann => {
      console.log(ann);
      // affecte le resultat de la methode listeAnnonce "ann" à la liste d'annonce
      this.annonces = ann.map(annonceImg => {
        return {
          ...annonceImg,
          imageUrl: `http://localhost:8080/offer-a-barter/${annonceImg.id}/image`
        }
      });
//      le spread operator ...annonceImg utilisé pour créer une copie de chaque annonce du tableau d'annonces récupéré à partir du service.
// Cette copie inclut toutes les propriétés de l'annonce, ainsi que la propriété imageUrl qui est ajoutée et qui est calculée à partir de l'identifiant de l'annonce.
// La méthode map() est également utilisée pour créer un nouveau tableau à partir du tableau d'annonces d'origine. Elle permet de parcourir chaque annonce du tableau d'annonces
// et d'appliquer une fonction à chaque élément pour créer un nouvel élément dans le nouveau tableau.
    });


    this.link();

    if(this.router.url === `/barters`){

      // inscription a l'observable de la methode listeAnnonce() qui fait appel a l api rest
      this.annonceService.listeAnnonce().subscribe(ann => {
        console.log(ann);
        // affecte le resultat de la methode listeAnnonce ann à la liste d'annonce
        this.annonces = ann;
  
      });
    }else{
      // inscription a l'observable de la methode listeUserAnnonce() qui fait appel a l api rest
      this.annonceService.listeUserAnnonce().subscribe(ann => {
        console.log(ann);
        // affecte le resultat de la methode listeUserAnnonce ann à la liste d'annonce
        this.annonces = ann;
  
      });


    }
    

  }
  supprimerAnnonce(annonce: Annonce) {
    let conf = confirm("Confirmer la suppression de l'annonce");
    if (conf)
      this.annonceService.deleteAnnonce(annonce);
  }

  // méthode pour sélectionner une annonce dans la liste
  onSelectedAnnonce(id: number): void {
    console.log("Annonce sélectionnée :", id);
    // récupère l'annonce correspondant à l'ID spécifié
    this.annonceService.consultAnnonce(id).subscribe((annonce) => {
      // stocke l'annonce sélectionnée dans une variable annonce
      this.annonceSelectionnee = annonce;
      console.log("Annonce sélectionnée :", annonce);
      //retour versla page annonces
      this.router.navigate(['barters', id]);
    });

  }
  link(){
    if(this.router.url === `/barters`){
      return true;
    }
    return false;
  }



}