import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  newAnnonce = new Annonce();
  id!:number;
  annoucement_picture!: string;
  description!: string; 
  message!:string;              // ajout d'attribut 

  

  constructor(private annonceService: AnnonceService, private router: Router) { }

  ngOnInit() {
 
  }
  

  addAnnonce() { 
    if (!this.checkDescriptionLength()) {
      return;
    }
    this.annonceService.addOneAnnonce(this.newAnnonce).subscribe(ann => {
      console.log(ann);
      this.router.navigate(['barters']);// retour a la page annonces après ajout d'une annonce
    });
  }
  
  //methode pour valider la longueur requis max min du champs description
  checkDescriptionLength(): boolean {
    if (this.newAnnonce.description.length < 10) {
      this.message = "La description est trop courte (minimum 10 caractères)";
      return false;
    } else if (this.newAnnonce.description.length > 250) {
      this.message = "La description est trop longue (maximum 250 caractères)";
      return false;
    } else {
      this.message = "";
      return true;
    }
  }
  
  // this.message = "Annonce " + this.newAnnonce.description +" ajoutée avec succes"

}