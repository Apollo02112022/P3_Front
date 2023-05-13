import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.component.html',
  styleUrls: ['./details-annonce.component.scss'],
  encapsulation: ViewEncapsulation.None //permet de modifier le css du composant 
})                                      //si il est utiliser dans un autre en tant qu'enfant 
export class DetailsAnnonceComponent implements OnInit {
  // variable "annonceId" de type "Annonce" utilisée pour stocker les détails de l'annonce sélectionnée.
  annonceId!: Annonce;
  image?: any;
  visible!:boolean

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService, private router : Router) { }

  ngOnInit() {//récupére l'annonce sélectionnée à partir du service AnnonceService en utilisant la méthode getAnnonceDetails(id)
    const id = this.route.snapshot.paramMap.get('id');//permet de récupérer la valeur de l'identifiant (id) passé en paramètre dans l'URL de la page.
    this.getAnnouncementDetails(id);
    console.log(id);
    if(this.router.url.includes("proposal_deal")){
      this.visible = false
    }else if(this.router.url.includes("barters")){
      this.visible = true
    }
  }

  // méthode pour récupérer les détails de l'annonce sélectionnée à partir du service AnnonceService en utilisant la méthode "consultAnnonce(id)"
  getAnnouncementDetails(id: any) {
    this.annonceService.consultAnnonce(id).pipe(
      map((data: any) => { // opérateur "map" pour assigner les données reçues à la variable "annonceId".
        this.annonceId = data;
        console.log("DATA RECU : " + this.annonceId);
      }),
      catchError((error: any) => {
        console.log(error);
        return throwError(() => error); // intercepter les erreurs éventuelles et renvoyer une observable d'erreur
      })
    ).subscribe(() => {
      this.getAnnouncementPicture(); // appel de la méthode "getAnnouncementPicture()" pour récupérer l'image associée à l'annonce sélectionnée
    });
  }

  // méthode pour récupérer l'image associée à l'annonce sélectionnée à partir du service AnnonceService en utilisant 
  // la méthode "getAnouncementPictureById(id)" declarée dans annonceService
  getAnnouncementPicture() {
    this.annonceService.getAnouncementPictureById(this.annonceId.id).subscribe(
      (data: Blob) => {
        const reader = new FileReader(); // création d'un objet FileReader pour lire l'image sous forme de blob
        reader.readAsDataURL(data); // lit le blob sous forme d'URL
        reader.onloadend = () => {
          this.image = reader.result; // stock l'URL dans la variable "image"
        };
      },
      error => {
        console.log(error);
      }
    );
  }
}
