import { AnnoncesComponent } from './annonces/annonces.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';

const routes: Routes = [
  {path :"barters", component : AnnoncesComponent},
  {path :"offer-a-barter", component : AddAnnonceComponent},
  {path :"updateAnnonce/:id", component : UpdateAnnonceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
