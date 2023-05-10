import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  exchange : string = "J'échange";
  // recover : string ="Je récupère";
  picture : string = "";
  
  toggle: boolean = false;

  switch() {
    this.toggle = !this.toggle;
  }
}






