import { AnnoncesComponent } from './annonces/annonces.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { UserFormComponent } from './user-form/user-form.component';
import { UserCardComponent } from './userProfilModal/user-card/user-card.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { PropositionTrocComponent } from './proposition-troc/proposition-troc.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { TokenService } from './services/token.service';



const routes: Routes = [
  
  {path:'', component: AccueilComponent},
  {path:'accueil', component: AccueilComponent},
  {path :'barters', component : AnnoncesComponent},
  //canActivate:[TokenService] donne l'acces à la page uniquement si token valid
  {path :"offer-a-barter", component : AddAnnonceComponent,canActivate:[TokenService]},
  {path :"barters/:id", component : DetailsAnnonceComponent,canActivate:[TokenService]},
  {path :"proposal_deal/:id", component :PropositionTrocComponent,canActivate:[TokenService]},
  {path: 'users/:userid/profil', component: UserCardComponent,canActivate:[TokenService]},
  {path: 'users/:userid/profil/update', component: UserCardComponent,canActivate:[TokenService]},
  {path: 'users/:userid/barters', component: AnnoncesComponent,canActivate:[TokenService]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: UserFormComponent},
  {path: 'users/:userid/notifications', component: UserNotificationComponent ,canActivate:[TokenService]},
  {path:'**',redirectTo:'/accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

