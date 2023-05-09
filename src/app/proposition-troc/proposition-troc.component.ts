import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-proposition-troc',
  templateUrl: './proposition-troc.component.html',
  styleUrls: ['./proposition-troc.component.scss']
})
export class PropositionTrocComponent implements OnInit {

  content!: String;
  sender!: String;

  newNotification = new Notification();

  constructor(private router: Router, private notificationService: NotificationService,private token : TokenService) { }

  ngOnInit() {
  }


  
  addNotif() {
    const apelApi = "http://localhost:8080/postMessage?userAnnounceId="+this.token.userIdOnToken();
    fetch(apelApi,{
      method:'POST',
      body: JSON.stringify(this.newNotification),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    
    // this.router.navigate(['barters']);// retour a la page annonces après ajout d'une proposition
  }
  
  

}
