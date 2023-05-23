import { Injectable, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from "./token.service";
import { switchMap } from 'rxjs/operators';
import { AdminService } from './admin.service';

// constante pour dire a Angular que les données retournées sont sous format Json
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  // injection de dependance  variable :http de type HttpClient dans constructor
  constructor(private http: HttpClient, private router: Router, private token: TokenService, private adminService : AdminService) {
  
  }

  // variable pour affecter Url de l'app back-end 
  apiURL: string = 'http://localhost:8080/barters';
  apiURLAdd: string = 'http://localhost:8080/offer-a-barter?userid=';
  apiURLdetails: string = 'http://localhost:8080/barters/';
  apiURLDelete:string = "http://localhost:8080/users/"+this.token.userIdOnToken()+"/"
  annonces!: Annonce[];//declaration de variable et tableau d'annonce'

  userAnnouncementId:number | null= null;

  userAnnouncement: string = "http://localhost:8080/users/" ;


  // retourne  tableau d'annonce de type observable 
  listeAnnonce(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.apiURL);
  }

  getImage(imageURL: string): Observable<Blob> {
    return this.http.get(imageURL, { responseType: 'blob' });
  }
  // retourne  tableau d'annonce de type observable 
  listeUserAnnonce(): Observable<Annonce[]> {
   
    const token =  localStorage.getItem('token');

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {
      headers: headers
    };

    return this.http.get<Annonce[]>(this.userAnnouncement+this.token.userIdOnToken()+ "/barters",options);

  }

  adminUserAnnonce(): Observable<Annonce[]>{
    const token =  localStorage.getItem('token');

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {
      headers: headers
    };

    return this.http.get<Annonce[]>("http://localhost:8080/users/" +this.adminService.getUserId()+ "/barters",options)
  }

  // methode variable ann retourne une annonce Observable ajouter dans la bdd par l'API REST
  addOneAnnonce(ann: Annonce): Observable<ArrayBuffer> {
    const token = localStorage.getItem("token");
    const formData = new FormData(); // instance pour stoker les données de l'annonce
    formData.append('announcement_picture', ann.announcement_picture);// ajout des 2 propriétés "announcement_picture" et "description",
    formData.append('description', ann.description); //ajoutées à l'objet FormData avec la méthode "append".
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {
      headers: headers
    };
    return this.http.post<any>(this.apiURLAdd+this.token.userIdOnToken(), formData, options);
  } 
  
  //méthode "post" de l'objet "http" pour envoyer les données vers l'API. Le retour de la méthode est un objet "Observable" de type Annonce
  // qui est utilisé pour suivre l'état de la requête HTTP et renvoyer la réponse de l'API sous forme d'objet Annonce.

  deleteAnnonce(annonceid: number) {
    const url = this.apiURLDelete+"barters/"+annonceid;
    const token = localStorage.getItem("token");
    const options = {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      }),
    }
      fetch(url, options)
        .then(response => {
          response
          location.reload();
        })
        .catch(err => {
          console.log('test',err)
        });
      }
      
  consultAnnonce(id: number): Observable<ArrayBuffer> {
    //ajout du parametre concatener / id a l url pour consulter une annonce par id 
    const url = this.apiURLdetails + id;
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`});
    const options = {
      headers: headers
    };
    if (token == null) {
      alert("Pour accèder, connectez-vous ou créez un compte.");
      this.router.navigate(['login'])
      }
    return this.http.get<any>(url,options);
    // get retourne un objet de type annonce par l'url + id construite au dessus
  }
  getAnouncementPictureById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/barters/${id}/image`, { responseType: 'blob' });
  }
  // methode get retourne un oservable de type  responseType: 'blob',pour spécifier que la réponse doit être traitée 
  //comme des données binaires brutes.

}
