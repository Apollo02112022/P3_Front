import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';
import { Category } from '../models/category.model';
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
  // category!: Category[];
  // newIdCat!: number;
  // newCategory!: Category;
  

  constructor(private annonceService: AnnonceService, private router: Router) { }

  ngOnInit() {
    // this.category = this.annonceService.listeCategory();
  }
  addAnnonce() {
    // console.log(this.newIdCat);
    // this.newCategory = this.annonceService.consulterCategory(this.newIdCat);  

    this.annonceService.addOneAnnonce(this.newAnnonce).subscribe(ann => {
      console.log(ann);
      this.router.navigate(['barters']);
    });
  }
  // this.message = "Annonce " + this.newAnnonce.description +" ajoutée avec succes"
  // this.newAnnonce.category = this.newCategory;     //
  // this.annonceService.addOneAnnonce(this.newAnnonce);
  // this.router.navigate(['annonces']); // retour a la page annonces après ajout d'un produit
  // }

}