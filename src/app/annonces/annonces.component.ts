import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  annonce!: Annonce;
  annonces!: Annonce[];//tableau d'annonces
  annonceSelectionnee!: ArrayBuffer;

  constructor(private annonceService: AnnonceService, private router: Router) {

  }
  // ngOnInit recupère les annonces à partir de annonceService
  ngOnInit(): void {



    this.link();

    if (this.router.url === `/barters`) {

      // inscription a l'observable de la methode listeAnnonce() qui fait appel a l api rest
      this.annonceService.listeAnnonce().subscribe(ann => {
        console.log(ann);
        // affecte le resultat de la methode listeAnnonce "ann" à la liste d'annonce
        // Pour chaque objet "annonceImg" de la liste "ann", on ajoute une propriété "imageUrl" à l'objet en utilisant une interpolation de chaîne.
        // La propriété "imageUrl" contient une URL qui pointe vers l'image de l'annonce.
        this.annonces = ann.map(annonceImg => {
          return {
            ...annonceImg,
            imageUrl: `http://localhost:8080/barters/${annonceImg.id}/image`// interpolation ${annonceImg.id} est = a la concatenation" /+ annonceImg.id +/ "
          }
        });
        //      le spread operator ...annonceImg utilisé pour créer une copie de chaque annonce du tableau d'annonces récupéré à partir du service.
        // Cette copie inclut toutes les propriétés de l'annonce, ainsi que la propriété imageUrl qui est ajoutée et qui est calculée à partir de l'identifiant de l'annonce.
        // La méthode map() est également utilisée pour créer un nouveau tableau à partir du tableau d'annonces d'origine. Elle permet de parcourir chaque annonce du tableau d'annonces
        // et d'appliquer une fonction à chaque élément pour créer un nouvel élément dans le nouveau tableau.
      });
    }else if (this.router.url.includes("admin") ) {
      this.annonceService.adminUserAnnonce().subscribe(ann => {
        console.log("oui ça passe !!!!! &&&&&&&");
        // affecte le resultat de la methode listeUserAnnonce ann à la liste d'annonce
        this.annonces = ann.map(annonceImg => {
          return {
            ...annonceImg,
            imageUrl: `http://localhost:8080/barters/${annonceImg.id}/image`// interpolation ${annonceImg.id} est = a la concatenation" /+ annonceImg.id +/ "
          }
        });
      });
    }else {
      // inscription a l'observable de la methode listeUserAnnonce() qui fait appel a l api rest
      this.annonceService.listeUserAnnonce().subscribe(ann => {
        console.log(ann);
        // affecte le resultat de la methode listeUserAnnonce ann à la liste d'annonce
        this.annonces = ann.map(annonceImg => {
          return {
            ...annonceImg,
            imageUrl: `http://localhost:8080/barters/${annonceImg.id}/image`// interpolation ${annonceImg.id} est = a la concatenation" /+ annonceImg.id +/ "
          }
        });
      });


    }


  }
  supprimerAnnonce(annonceid: number) {
    let conf = confirm("Confimer la suppression de l'annonce");
    if (conf){
      this.annonceService.deleteAnnonce(annonceid);
      console.log(annonceid , "Deleted");
    }else{
      console.log(annonceid , "Not deleted");
    }

  }

  // méthode pour sélectionner une annonce dans la liste
  onSelectedAnnonce(annonce: any): void {
    const id=annonce.id
    this.annonceService.userAnnouncementId  = annonce.user.id
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


  link() {
    if (this.router.url === `/barters`) {
      return true;
    }
    return false;
  }
}


