import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposition-troc',
  templateUrl: './proposition-troc.component.html',
  styleUrls: ['./proposition-troc.component.scss']
})
export class PropositionTrocComponent implements OnInit {

  content!: String;
  sender!: String;

  constructor(private notificationService: NotificationService,private router: Router) { }

  ngOnInit() {
  }
  sendProposition() {
  //  this.notificationService.createNotification(this.content,this.sender).subscribe(prop =>{
  //   console.log(prop);
  //   this.router.navigate(['barters']);// retour a la page annonces après ajout d'une proposition
  //  });
  }
}

// addAnnonce() {
//   if (!this.checkDescriptionLength()) {
//     return;
//   }
//   this.annonceService.addOneAnnonce(this.newAnnonce).subscribe(ann => {
//     console.log(ann);
//     this.router.navigate(['barters']);// retour a la page annonces après ajout d'une annonce
//   });
// }
// newAnnonce = new Annonce();
// id!: number;
// annoucement_picture!: string;
// description!: string;
// message!: string;              // ajout d'attribut 



// constructor(private annonceService: AnnonceService, private router: Router) { }

// ngOnInit() {

// }


