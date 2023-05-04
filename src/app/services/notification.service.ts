import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor() { }
  // Quand je clique sur le bouton proposer un echange, je lance la méthode qui créer une notification
  createNotification(notification : Notification) {
    // méthode fetch pour communiquezr avec le back, ici c'est pour lancer la méthode createNotification 
    // du controller notification
    fetch("http://localhost:8080/postMessage?userAnnounceId=2",{
      // méthode post car j'envoie des données
      method:"POST",
      // j'envoie des données du type json et j'intègrerais le token
      headers:{"Content-Type": "application/json",
      // "Authorization": "Bearer " + localStorage.getItem("token")
     },
    // données que j'envoie sous format json
     body:JSON.stringify(notification)
    }) 
  }
}

// export class NotificationService {

//   constructor() { }
//   // Quand je clique sur le bouton proposer un echange, je lance la méthode qui créer une notification
//   createNotification(content:any, sender:any) {
//     // méthode fetch pour communiquer avec le back, ici c'est pour lancer la méthode createNotification 
//     // du controller notification
//     fetch("http://localhost:8080/proposal_deal",{
//       // méthode post car j'envoie des données
//       method:"POST",
//       // j'envoie des données du type json et j'intègrerais le token
//       headers:{"Content-Type": "application/json",
//       // "Authorization": "Bearer " + localStorage.getItem("token")
//      },
//     // données que j'envoie sous format json
//      body:JSON.stringify({message:content, user:sender})
//     }) 

//   }
// }


