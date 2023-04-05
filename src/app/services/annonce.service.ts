import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  annonces : Annonce[] ;//declaration de variable et tableau d'annonce'
  category : Category[];//declaration de variable et tableau de categorie

  constructor() { 

    this.category= [
{idCat : 1, nomCat : "fruits"},
{idCat : 2, nomCat : "vegetables"}
];
this.annonces = [
  
    { idAnnonce : 1, description : "Patates", dateCreation : new Date("01/14/2011"), category : {idCat : 1, nomCat : "vegetables"}},
    { idAnnonce : 2, description : "Carottes",dateCreation : new Date("12/17/2010"), category : {idCat : 2, nomCat : "vegetables"}},
    { idAnnonce : 3, description :"Fraises", dateCreation : new Date("02/20/2020"),category : {idCat : 1, nomCat : "fruits"}}
    ];
    
}
listeAnnonce() : Annonce[]{
  return this.annonces
}
addOneAnnonce(annonce:Annonce){
  this.annonces.push(annonce);
}
deleteAnnonce(annonce :Annonce){
  // supprime l'annonce du tableau annonces
  const index = this.annonces.indexOf(annonce,0);
  if (index >-1){
    this.annonces.splice(index,1);//sup 1 seule annonce
  }
}
consultAnnonce(id:number): Annonce{
  //cette méthode accepte comme paramètre un id d’une annonce et retourne l'annonce
// en le cherchant dans le tableau annonces
  return this.annonces.find(ann => ann.idAnnonce == id)!;// le ! pour accepter les variables undefined
  
  }
  trierAnnonces(){
    this.annonces = this.annonces.sort((n1,n2) => {
    if (n1.idAnnonce > n2.idAnnonce) {
    return 1;
    }
    if (n1.idAnnonce < n2.idAnnonce) {
    return -1;
    }
    return 0;
    });
    }
    
  updateAnnonce(ann:Annonce)
{
// console.log(p);
this.deleteAnnonce(ann);
this.addOneAnnonce(ann);
this.trierAnnonces();
}
listeCategory():Category[] {
  return this.category;

}
consulterCategory(id:number): Category{
  return this.category.find(cat => cat.idCat == id)!;
  }
}
