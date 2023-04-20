import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentHiddenService } from '../../services/component-hidden.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  constructor(private componentHiddenService: ComponentHiddenService) {}

  userid = 1;

  getHidden():boolean{
    return this.componentHiddenService.getHidden();

  }

setHidden(){
  this.componentHiddenService.setHidden();
  console.log(this.componentHiddenService.getHidden())
} 

}
