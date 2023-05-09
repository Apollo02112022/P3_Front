import { Component, Input } from '@angular/core';
import { ComponentHiddenService } from '../../../services/component-hidden.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card-button',
  templateUrl: './user-card-button.component.html',
  styleUrls: ['./user-card-button.component.scss']
})
export class UserCardButtonComponent {
userid = 1;

constructor(private router : Router){}

userNotification(){
this.router.navigate(["users/notification",this.userid,"notifications"])
}

userAnnouncement(){
  this.router.navigate(["/users",this.userid,"barters"])

}
}
