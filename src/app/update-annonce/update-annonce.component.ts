import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
  currentAnnonce = new Annonce();
  category!: Category[];
  updatedCatId!: number;

  //Transmettre des paramètres avec ActivatedRoute
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private annonceService: AnnonceService) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params["id"]);
    this.currentAnnonce = this.annonceService.consultAnnonce(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentAnnonce);
    // this.category = this.annonceService.listeCategory();//rempli le tableau avec toutes les categories listés
    this.currentAnnonce = this.annonceService.consultAnnonce(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId = this.currentAnnonce.category.idCat;// updateCategory recupere l 'id de la categorie current


  }
  updateAnnonce() {
    // console.log(this.currentAnnonce)
    this.annonceService.updateAnnonce(this.currentAnnonce);
    this.router.navigate(["barters"]);// retour a la page d'annonce après modification

    // this.currentAnnonce.category = this.annonceService.consulterCategory(this.updatedCatId);
    // this.annonceService.updateAnnonce(this.currentAnnonce);
    // this.router.navigate(['barters']);

    

  }
}
