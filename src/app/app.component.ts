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
  title: any;


}
  
