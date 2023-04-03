import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  newAnnonce = new Annonce();
  message!: string;
  constructor(private annonceService : AnnonceService) { }

  ngOnInit() {
  }
addAnnonce(){
  // console.log(this.newAnnonce);
this.annonceService.addOneAnnonce(this.newAnnonce);
this.message = "Annonce " + this.newAnnonce.description +" ajoutée avec succes"


}
}