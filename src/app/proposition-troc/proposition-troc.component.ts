import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { TokenService } from '../services/token.service';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-proposition-troc',
  templateUrl: './proposition-troc.component.html',
  styleUrls: ['./proposition-troc.component.scss']
})
export class PropositionTrocComponent implements OnInit {

  content!: String;
  sender!: String;

  newNotification = new Notification();

  constructor(private router: Router, private notificationService: NotificationService,private token : TokenService, private annonceService : AnnonceService) { }

  ngOnInit() {

  }


  
  addNotif() {
    const apiUrl = `http://localhost:8080/postMessage?userAnnounceId=${this.annonceService.userAnnouncementId}`;
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
}
