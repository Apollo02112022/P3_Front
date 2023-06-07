import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { TokenService } from '../services/token.service';
import { AnnonceService } from '../services/annonce.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-proposition-troc',
  templateUrl: './proposition-troc.component.html',
  styleUrls: ['./proposition-troc.component.scss']
})
export class PropositionTrocComponent implements OnInit {

  content!: String;
  sender!: String;
  messageErr!: string;
  newNotification = new Notification();

  constructor(private router: Router, private notificationService: NotificationService,private token : TokenService, private annonceService : AnnonceService) { }

  ngOnInit() {

  }


  
  addNotif() {
    if (!this.checkDescriptionLength()) {
      return;
    }
    const apiUrl = environment.apiUrlAddMessage+this.annonceService.userAnnouncementId;
    const token = localStorage.getItem('token');
    const message = this.newNotification.message;
    const tel = this.newNotification.tel;
    const mail = this.newNotification.mail;
    const data = { message, tel, mail };

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
      }),
    }
    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data =>  data)
      .catch(error => console.error('Error:', error));
    this.router.navigate(['barters']); // retour a la page annonces après ajout d'une proposition
  }



// méthode pour valider la longueur requise min/max de la description de l'annonce
checkDescriptionLength(): boolean {
  if (this.newNotification.message.length < 10) {
    this.messageErr = "La description est trop courte (minimum 10 caractères)";
    return false;
  } else if (this.newNotification.message.length > 250) {
    this.messageErr = "La description est trop longue (maximum 250 caractères)";
    return false;
  } else {
    return true;
  }
}
}