import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentHiddenService } from '../../services/component-hidden.service';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  constructor(private componentHiddenService: ComponentHiddenService, @Inject(LogoutService) private logout: LogoutService) {}

  userid = 1;

  getHidden():boolean{
    return this.componentHiddenService.getHidden();

  } 

  setHidden(){
    this.componentHiddenService.setHidden();
    console.log(this.componentHiddenService.getHidden())
  } 

  btnLogout() {
    this.logout.logout();
  }

}
