import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce.model';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  
  annonces?: Annonce[];//tableau d'annonces
  
  constructor(private annonceService : AnnonceService) { 
  }
  ngOnInit() : void {
    this.annonces = this.annonceService.listeAnnonce();
}
  

}