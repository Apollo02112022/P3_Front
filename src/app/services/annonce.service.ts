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
  

  userid:number = 2;

  // variable pour affecter Url de l'app back-end 
  apiURL: string = 'http://localhost:8080/barters';
  apiURLAdd: string = 'http://localhost:8080/offer-a-barter?userid=1&categoryid=2';
  apiURLdetails: string = 'http://localhost:8080/barters/';
  annonces!: Annonce[];//declaration de variable et tableau d'annonce'
  // category : Category[];//declaration de variable et tableau de categorie
  userAnnouncement: string = "http://localhost:8080/users/"+this.userid+"/barters";


  // injection de dependance  variable :http de type HttpClient dans constructor
  constructor(private http: HttpClient) {

  }
  // listeAnnonce() : Annonce[]{
  //   return this.annonces}


  // retourne  tableau d'annonce de type observable 
  listeAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiURL);
  }
  // retourne  tableau d'annonce de type observable 
  listeUserAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.userAnnouncement);
  }
 
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
  consultAnnonce(id: number): Observable<Annonce> {
    //ajout du parametre concatener / id a l url pour consulter une annonce par id 
    const url = this.apiURLdetails +id;
    console.log(url)
    return this.http.get<Annonce>(url, httpOptions);
    // get retourne un objet de type annonce par l'url + id construite au dessus
  }


    // methode pour trier les annonce par id
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



}
