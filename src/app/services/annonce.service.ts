import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// constante pour dire a Angular que les données retournées sont sous format Json
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  userid:number = 1;

  // variable pour affecter Url de l'app back-end 
  apiURL: string = 'http://localhost:8080/barters';
  apiURLAdd: string = 'http://localhost:8080/offer-a-barter?userid=1&categoryid=2';
  apiURLdetails: string = 'http://localhost:8080/barters/';
  apiURLDelete:string = "http://localhost:8080/users/"+this.userid+"/"
  annonces!: Annonce[];//declaration de variable et tableau d'annonce'



  // category : Category[];//declaration de variable et tableau de categorie
  userAnnouncement: string = "http://localhost:8080/users/" + this.userid + "/barters";



  // injection de dependance  variable :http de type HttpClient dans constructor
  constructor(private http: HttpClient, private router: Router) {

  }

  // retourne  tableau d'annonce de type observable 
  listeAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiURL);
  }

  getImage(imageURL: string): Observable<Blob> {
    return this.http.get(imageURL, { responseType: 'blob' });
  }
  // retourne  tableau d'annonce de type observable 
  listeUserAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.userAnnouncement);

  }

  // methode variable ann retourne une annonce Observable ajouter dans la bdd par l'API REST
  addOneAnnonce(ann: Annonce): Observable<Annonce> {

    const formData = new FormData(); // instance pour stoker les données de l'annonce
    formData.append('announcement_picture', ann.announcement_picture);// ajout des 2 propriétés "announcement_picture" et "description",
    formData.append('description', ann.description);                 //ajoutées à l'objet FormData avec la méthode "append". 


    return this.http.post<Annonce>(this.apiURLAdd, formData);
  } //méthode "post" de l'objet "http" pour envoyer les données vers l'API. Le retour de la méthode est un objet "Observable" de type Annonce
  // qui est utilisé pour suivre l'état de la requête HTTP et renvoyer la réponse de l'API sous forme d'objet Annonce.

  deleteAnnonce(annonceid: number) {
    const url = this.apiURLDelete+"barters/"+annonceid;
      fetch(url, {
        method: 'DELETE'
      })
        .then(response => {
          console.log(response)
          location.reload();
        })
        .catch(err => {
          console.log('test',err)
        });
      }
  consultAnnonce(id: number): Observable<Annonce> {
    //ajout du parametre concatener / id a l url pour consulter une annonce par id 
    const url = this.apiURLdetails + id;
    console.log(url)
    return this.http.get<Annonce>(url, httpOptions);
    // get retourne un objet de type annonce par l'url + id construite au dessus
  }
  getAnouncementPictureById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/offer-a-barter/${id}/image`, { responseType: 'blob' });
  }
  // methode get retourne un oservable de type  responseType: 'blob',pour spécifier que la réponse doit être traitée 
  //comme des données binaires brutes.
}
