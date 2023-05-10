import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss']
})
export class UserNotificationComponent implements OnInit{

  notification!: Notification;
  //tableau de notifications
  usernotification!:  Notification[];
 

  newNotification = new Notification();

  constructor(private router: Router, private notificationservice: NotificationService) {}
  ngOnInit(): void {

       
    const apelApi = "http://localhost:8080/postMessage?userAnnounceId="+this.newNotification;
    fetch(apelApi,{
      method:'POST',
      body: JSON.stringify(this.newNotification),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
