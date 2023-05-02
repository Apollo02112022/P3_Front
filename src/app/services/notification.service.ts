import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // constructor() { }
  // // Quand je clique sur le bouton proposer un echange, je lance la méthode qui créer une notification
  // createNotification(content:any, sender:any) {
  //   // méthode fetch pour communiquer avec le back, ici c'est pour lancer la méthode createNotification 
  //   // du controller notification
  //   fetch("http://localhost:8080/proposal_deal",{
  //     // méthode post car j'envoie des données
  //     method:"POST",
  //     // j'envoie des données du type json et j'intègrerais le token
  //     headers:{"Content-Type": "application/json",
  //     // "Authorization": "Bearer " + localStorage.getItem("token")
  //    },
  //   // données que j'envoie sous format json
  //    body:JSON.stringify({message:content, user:sender})
  //   }) 

  // }
}
// export class NotificationService {

//   constructor() { }

//   createNotification(content:any, sender:any): Observable<any> {
//     return new Observable(observer => {
//       fetch("http://localhost:8080/proposal_deal", {
//         method:"POST",
//         headers: {
//           "Content-Type": "application/json",
//           // "Authorization": "Bearer " + localStorage.getItem("token")
//         },
//         body: JSON.stringify({message:content, user:sender})
//       }).then(response => {
//         observer.next(response);
//         observer.complete();
//       }).catch(error => {
//         observer.error(error);
//       });
//     });
//   }
  
// }