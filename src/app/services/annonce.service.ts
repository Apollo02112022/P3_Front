import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  annonces : Annonce[] ; //declaration de variable et tableau d'annonce'
constructor() { 
this.annonces = [
  {idAnnonce:1,description:"Test",dateCreation: new Date ("02/04/2022")},//affecte valeurs a la variable
  {idAnnonce:2,description:"Test2",dateCreation: new Date ("02/04/2022")},
  {idAnnonce:3,description:"Test3",dateCreation: new Date ("02/04/2022")}
];
}
listeAnnonce() : Annonce[]{
  return this.annonces
}
addOneAnnonce(annonce:Annonce){
  this.annonces.push(annonce);
}

}
