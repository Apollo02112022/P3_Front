import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { TokenService } from '../services/token.service';
import { Location } from '@angular/common';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // , OnDestroy
  receiveMessage: boolean = true;

  // Propriété qui va déterminer si le footer doit être masqué ou affiché
  hiddenHeader: boolean = true;

  // private eventSource: EventSource | undefined;
  // public messages: string[] = [];

  messages: string[] = [];
  isStreamOn:boolean = false;

  // constructor(private router: Router) {}
  constructor(private http: HttpClient,private router: Router,private annonceService: AnnonceService,private location: Location, private token :TokenService,private notifService : NotificationService) {}
  
  ngOnInit() {

  
      // écoute les évènements de navigation du 'Router'
      this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd ){

          if(!this.isStreamOn && event.url == "/barters" &&  localStorage.getItem('token')){
            this.isStreamOn = true;
            this.startStreamMessage();
          }
        }
        // si l'évènement est de type 'NavigationEnd', la navigation sera terminée
        if (event instanceof NavigationEnd) {
          this.hiddenHeader = !this.hidden();
        }
      });

    
  }

  userNotificationNav(){
    return "/users/"+this.token.userIdOnToken()+"/notifications"    
}

userProfilNav(){
  return "/users/"+this.token.userIdOnToken()+"/profil"    
}

  hidden() {
    return this.router.url === '/' || this.router.url === '/accueil';
  }



  startStreamMessage(){

   this.messages = this.notifService.messages

  }
  
    //methode retour page precedente
 backClick() {
  this.location.back();
}

}


 
  

