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
  encapsulation: ViewEncapsulation.None
})
export class DetailsAnnonceComponent implements OnInit {
  // variable "annonceId" de type "Annonce" utilisée pour stocker les détails de l'annonce sélectionnée.
  annonceId!: Annonce;

  constructor(private route: ActivatedRoute, private annonceService: AnnonceService) { }

  ngOnInit() {//récupére l'annonce sélectionnée à partir du service AnnonceService en utilisant la méthode getAnnonceDetails(id)
    const id = this.route.snapshot.paramMap.get('id');//permet de récupérer la valeur de l'identifiant (id) passé en paramètre dans l'URL de la page.
    this.getAnnouncementDetails(id);
    console.log(id);
  }

  // recuperer les details de l'annonce 
  getAnnouncementDetails(id: any) {
    this.annonceService.consultAnnonce(id).pipe(
      map((data: any) => {  //opérateur "map" pour assigner les données reçues à la variable "annonceId".
        this.annonceId = data;
        console.log(data);
      }),
      catchError((error: any) => {
        console.log(error);
        return throwError(() => error);//intercepter les erreurs éventuelles et renvoyer une observable d'erreur
      })
    ).subscribe();
    //la méthode "subscribe()" est appelée pour déclencher 
    //la requête HTTP et récupérer les données de l'annonce sélectionnée.
  }


}
