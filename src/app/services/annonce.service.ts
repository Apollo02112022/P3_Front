import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// constante pour dire a Angular que les données retournées sont sous format Json
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  // variable pour affecter Url de l'app back-end 
  apiURL: string = 'http://localhost:8080/barters';
  apiURLAdd:string = 'http://localhost:8080/offer-a-barter?userid=1&categoryid=2';
  annonces!: Annonce[];//declaration de variable et tableau d'annonce'
  // category : Category[];//declaration de variable et tableau de categorie


  // injection de dependance  variable :http de type HttpClient dans constructor
  constructor(private http: HttpClient) {

    //     this.category= [
    // {idCat : 1, nomCat : "fruits"},
    // {idCat : 2, nomCat : "vegetables"}
    // ];
    // this.annonces = [

    //     { idAnnonce : 1, description : "Patates", dateCreation : new Date("01/14/2011"), category : {idCat : 1, nomCat : "vegetables"}},
    //     { idAnnonce : 2, description : "Carottes",dateCreation : new Date("12/17/2010"), category : {idCat : 2, nomCat : "vegetables"}},
    //     { idAnnonce : 3, description :"Fraises", dateCreation : new Date("02/20/2020"),category : {idCat : 1, nomCat : "fruits"}}
    //     ];

  }
  // listeAnnonce() : Annonce[]{
  //   return this.annonces}


  // retourne  tableau d'annonce de type observable 
  listeAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiURL);
  }
  // addOneAnnonce(annonce: Annonce) {
  //   this.annonces.push(annonce);
  // }


  // methode variable ann retourne une annonce Observable ajouter dans la bdd par l'API REST
  addOneAnnonce(ann: Annonce): Observable<Annonce> {
    return this.http.post<Annonce>(this.apiURLAdd, ann, httpOptions); //methode post transmet l'annonce "ann" sous format json "httpOptions" 
  }
  deleteAnnonce(annonce: Annonce) {
    // supprime l'annonce du tableau annonces
    const index = this.annonces.indexOf(annonce, 0);
    if (index > -1) {
      this.annonces.splice(index, 1);//sup 1 seule annonce
    }
  }
  consultAnnonce(id: number): Annonce {
    //cette méthode accepte comme paramètre un id d’une annonce et retourne l'annonce
    // en le cherchant dans le tableau annonces
    return this.annonces.find(ann => ann.id == id)!;// le ! pour accepter les variables undefined

  }
  trierAnnonces() {
    this.annonces = this.annonces.sort((n1, n2) => {
      if (n1.id > n2.id) {
        return 1;
      }
      if (n1.id < n2.id) {
        return -1;
      }
      return 0;
    });
  }

  updateAnnonce(ann: Annonce) {
    // console.log(p);
    this.deleteAnnonce(ann);
    this.addOneAnnonce(ann);
    this.trierAnnonces();
  }
  // listeCategory():Category[] {
  //   return this.category;

  // }
  // consulterCategory(id:number): Category{
  //   return this.category.find(cat => cat.idCat == id)!;
  //   }
}
