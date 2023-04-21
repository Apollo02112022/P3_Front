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
  // ngOnInit recupère les annonces à partir du service
  ngOnInit(): void {

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
  supprimerAnnonce(annonceid: number) {
    let conf = confirm("Confimer la suppression de l'annonce");
    if (conf){
      this.annonceService.deleteAnnonce(annonceid);
      console.log(annonceid , "Deleted");
    }else{
      console.log(annonceid , "Not deleted");
    }
  }

  //methode pour selectioner une annonce dans la liste
  onSelectedAnnonce(id: number): void {
    console.log("Annonce sélectionnée :", id);
    this.annonceService.consultAnnonce(id).subscribe((annonce) => {
      this.annonceSelectionnee = annonce;
      console.log("Annonce sélectionnée :", annonce);
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