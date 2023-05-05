import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import jwtDecode, * as jwt_decode from 'jwt-decode';
import { AnnonceService } from '../services/annonce.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // , OnDestroy
  receiveMessage: boolean = true;

  // Propriété qui va déterminer si le footer doit être masqué ou affiché
  hiddenFooter: boolean = true;

  // private eventSource: EventSource | undefined;
  // public messages: string[] = [];

  messages: string[] = [];


  // constructor(private router: Router) {}
  constructor(private http: HttpClient,private router: Router,private annonceService: AnnonceService,private location: Location) {}
  
  ngOnInit() {
    const userId = localStorage.getItem("userId");

    // requête GET pour se connecter au serveur SSR
    const eventSource = new EventSource(`http://localhost:8080/streamMessages?userId=`+userId);

    // écoute les évènements SSE et ajoute les messages reçus à la liste
    eventSource.addEventListener('message', (event: MessageEvent) => {
      const message = event.data;
      this.messages.push(message);
      console.log("&&&&&&&&&&&&&&&&&&&&& messages", message);
    });

      // écoute les évènements de navigation du 'Router'
      this.router.events.subscribe((event) => {
        // si l'évènement est de type 'NavigationEnd', la navigation sera terminée
        if (event instanceof NavigationEnd) {
          this.hiddenFooter = !this.hidden();
        }
      });
    
  }

  


  
  hidden() {
    return this.router.url === '/' || this.router.url === '/accueil';
  }
  // ng OnInit

      
  //   }); 
  //   this.eventSource = new EventSource('http://localhost:8080/streamMessages');
  //   this.eventSource.addEventListener('message', (event: MessageEvent) => {
  //     console.log(event.data);
  //     this.messages.push(event.data);
  //   }, false);
  //   this.eventSource.addEventListener('error', (event: Event) => {
  //     console.error('Error connecting to SSE stream', event);
  //   }, false);   
  // }

  // ngOnDestroy(): void {
  //   this.eventSource?.close();
  // }
  
    // if (this.router.url === '/' || this.router.url === '/accueil') {
    //   this.hidden = false;
    // } else (this.router.url === '/barters' || this.router.url === '/offer-a-barter');

  
  
    //methode retour page precedente
 backClick() {
  this.location.back();
}

  }
