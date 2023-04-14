import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  exchange : string = "J'échange";
  recover : string ="Je récupère";
  picture : string = "";
  takePicture : string = "Je mets en ligne mon annonce en prenant une photo.";
  message : string = "Je discute avec des particuliers qui sont intéréssés et nous convenons d'un rdv.";
  deal : string = "L’échange a été effectué, je fais un heureux ou une heureuse et moi aussi j'en profite !";
  search : string = "Je trouve mon bonheur parmi une multitude d’annonces.";
  proposal : string = "Je propose un échange, si il est accepté, nous convenons d'un rendez-vous.";
  retrieve : string = "Je récupère mes aliments et je fais un heureux ou une heureuse par la même occasion !";
  
  

  toggle: boolean = true;
  
  switch() {
    this.toggle = !this.toggle;
  }

  


  // exchange : string = "J'échange";
  // recover : string ="Je récupère";

  // selected : boolean = false;

  // switch(){
  //   this.selected = !this.selected;
  // }

  // write : boolean = false;

  // contents() {
  //   this.write =!this.write;
  // }


}





