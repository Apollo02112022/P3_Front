import { Component, OnInit } from '@angular/core';
// import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposition-troc',
  templateUrl: './proposition-troc.component.html',
  styleUrls: ['./proposition-troc.component.scss']
})
export class PropositionTrocComponent implements OnInit {

  content!: String;
  sender!: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendProposition() {
  //  this.notificationService.createNotification(this.content,this.sender).subscribe(prop =>{
  //   console.log(prop);
  //   this.router.navigate(['barters']);// retour a la page annonces après ajout d'une proposition
  //  });
  }
}
