import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';

const routes: Routes = [
  {path :"annonces", component : AnnoncesComponent},
  {path :"add-annonces", component : AddAnnonceComponent},
  {path :"updateAnnonce/:id", component : UpdateAnnonceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
