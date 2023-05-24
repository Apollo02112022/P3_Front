import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TokenService } from '../services/token.service';
import { environment } from 'src/environments/environment.prod';
import { NotificationService } from '../services/notification.service';
import { UserlogoService } from '../services/userlogo.service';

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

  pseudo:string = this.userLogoService.getPseudo()
  image:null | string | ArrayBuffer = this.userLogoService.getImage();

  // constructor(private router: Router) {}
  constructor(private router: Router,private userLogoService: UserlogoService,private location: Location, private token :TokenService, private notifService : NotificationService) {}
  
  ngOnInit() {

    if(localStorage.getItem('token')){

      this.getUserPseudoAndPictureForHederandFooter(),
      this.pseudo =this.token.getDecodedToken().pseudo;
      this.image = this.userLogoService.getImage();
    }


  
      // écoute les évènements de navigation du 'Router'
      this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd ){

          if(localStorage.getItem('token')){

            this.getUserPseudoAndPictureForHederandFooter(),
            this.pseudo =this.token.getDecodedToken().pseudo;
            this.image = this.userLogoService.getImage();
          }
          

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
      return "/users/"+this.token.userIdOnToken()+"/notifications"    
  }

  userProfilNav(){
    return "/users/"+this.token.userIdOnToken()+"/profil"    
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
      // this.messages.push(message);
      this.notifService.messages.push(message)
      this.messages=this.notifService.messages
    });


  }

  
  
    //methode retour page precedente
 backClick() {
  this.location.back();
}

getUserPseudoAndPictureForHederandFooter(){

  if(this.token.getDecodedToken().pseudo == null){
    
      this.pseudo = ""
      this.image = "assets/icons/utilisateur-du-cercle.png"
    }

    this.pseudo = this.token.getDecodedToken().pseudo;

    this.userLogoService.getUserPicture(this.userLogoService.imageURL + this.token.userIdOnToken() + "/picture").subscribe(
      (data: Blob) => {
        const reader = new FileReader(); // création d'un objet FileReader pour lire l'image sous forme de blob
        reader.readAsDataURL(data); // lit le blob sous forme d'URL
        reader.onloadend = () => {
          this.image = reader.result; // stock l'URL dans la variable "image"
        };
      },
      error => {
        console.log(error);
      }
    );
}


}
