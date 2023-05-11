import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import jwtDecode, * as jwt_decode from 'jwt-decode';
import { AnnonceService } from '../services/annonce.service';
import { Location } from '@angular/common';
import { TokenService } from '../services/token.service';
import { environment } from 'src/environments/environment.prod';
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
  isStreamOn:boolean = false;

  // constructor(private router: Router) {}
  constructor(private http: HttpClient,private router: Router,private annonceService: AnnonceService,private location: Location, private token :TokenService) {}
  
  ngOnInit() {

  
      // écoute les évènements de navigation du 'Router'
      this.router.events.subscribe((event) => {
        console.log("event",event);
        if(event instanceof NavigationEnd ){

          if(!this.isStreamOn && event.url == "/barters" &&  localStorage.getItem('token')){
            this.isStreamOn = true;
            this.startStream();
          }
        }
        // si l'évènement est de type 'NavigationEnd', la navigation sera terminée
        if (event instanceof NavigationEnd) {
          this.hiddenFooter = !this.hidden();
        }
      });

    
  }

  userNotificationNav(){
    this.router.navigate(['users',this.token.userIdOnToken(),'notifications'])
  }

  userProfilNav(){
    this.router.navigate(['users',this.token.userIdOnToken(),'profil'])
  }

  hidden() {
    return this.router.url === '/' || this.router.url === '/accueil';
  }

  startStream(){
    // requête GET pour se connecter au serveur SSR
    const eventSource = new EventSource(environment.apiUrlNotificationMessage+this.token.userIdOnToken());

    // écoute les évènements SSE et ajoute les messages reçus à la liste
    eventSource.addEventListener('message', (event: MessageEvent) => {
      const message = event.data;
      this.messages.push(message);
      console.log("&&&&&&&&&&&&&&&&&&&&& messages", message);
    });


  }

  
  
    //methode retour page precedente
 backClick() {
  this.location.back();
}

}
