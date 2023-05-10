import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../models/notification.model';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss']
})
export class UserNotificationComponent implements OnInit{

  notifications!: any;
  //tableau de notifications
  usernotification!:  Notification[];
 

  newNotification = new Notification();

  constructor(private router: Router, private notificationservice: NotificationService, private token : TokenService) {}
  ngOnInit(): void {

       
    const apelApi = "http://localhost:8080/notifications/"+this.token.userIdOnToken();

    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}` });
    const options = {
      headers: header,
      method: 'GET',
    };

    fetch(apelApi,options)
    .then(data=>data.json())
    .then(data=>{
      console.log(data)
      this.notifications = data})
  }
}
