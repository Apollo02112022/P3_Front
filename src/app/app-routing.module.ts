import { AnnoncesComponent } from './annonces/annonces.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { PropositionTrocComponent } from './proposition-troc/proposition-troc.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'accueil', component: AccueilComponent},
  {path :"barters", component : AnnoncesComponent},
  {path :"offer-a-barter", component : AddAnnonceComponent},
  {path :"updateAnnonce/:id", component : UpdateAnnonceComponent},
  {path :"barters/:id", component : DetailsAnnonceComponent},
  {path :"proposal_deal/:id", component :PropositionTrocComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

