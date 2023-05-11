import { Component, Input } from '@angular/core';
import { ComponentHiddenService } from '../../../services/component-hidden.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-card-button',
  templateUrl: './user-card-button.component.html',
  styleUrls: ['./user-card-button.component.scss']
})
export class UserCardButtonComponent {

constructor(private router : Router,private token : TokenService ){}

userNotification(){
this.router.navigate(["users",this.token.userIdOnToken(),"notifications"])
}

userAnnouncement(){
  this.router.navigate(["/users",this.token.userIdOnToken(),"barters"])
}


}
