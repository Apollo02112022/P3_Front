import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './services/notification.service';
import { Notification } from './models/notification.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'P3_Front';

  content!: String;
  sender!: String;
  userId:number=2;

  isHomePage: boolean = true;

  newNotification = new Notification();

  constructor(private router: Router, private notificationService: NotificationService) { }
  notif() {
    this.newNotification.message = "test";
    const apelApi = "http://localhost:8080/postMessage?userAnnounceId="+this.userId;
    fetch(apelApi,{
      method:'POST',
      body: JSON.stringify(this.newNotification),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => console.log("&&&&&&&&&&&&&&&&& data", data))
    .catch(err => console.log(err))
    
    // this.router.navigate(['barters']);// retour a la page annonces après ajout d'une proposition
  }
}
  
//   ngOnInit() {
//     this.appComponent.isHomePage = false;
//   }
// }

//   ngOnInit (){
//     // écoute les évènements de navigation du 'Router'
//     this.router.events.subscribe((event) => {
//      // si l'évènement est de type 'NavigationEnd', la navigation sera terminée
//      if (event instanceof NavigationEnd) {
//        this.hiddenBod = !this.hidden();
//      }
//  })
// } 

// hidden() {
//   return this.router.url === '/' || this.router.url === '/accueil';
// }
// }
