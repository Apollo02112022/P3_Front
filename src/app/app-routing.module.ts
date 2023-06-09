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
import { MentionsComponent } from './mentions/mentions.component';
import { PolitiqueComponent } from './politique/politique.component';
import { CharteComponent } from './charte/charte.component';
import { CguComponent } from './cgu/cgu.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { LoginGuard } from './login.guard';
import { RoutesGuard } from './routes.guard';
import { AdminGuard } from './admin.guard';





const routes: Routes = [
  
  {path:'', component: AccueilComponent},
  {path:'accueil', component: AccueilComponent},
  {path :'barters', component : AnnoncesComponent},
  //canActivate:[TokenService] donne l'acces à la page uniquement si token valid
  {path :"offer-a-barter", component : AddAnnonceComponent,canActivate:[RoutesGuard]},
  {path :"barters/:id", component : DetailsAnnonceComponent,canActivate:[RoutesGuard]},
  {path :"proposal_deal/:id", component :PropositionTrocComponent,canActivate:[RoutesGuard]},
  {path: 'users/:userid/profil', component: UserCardComponent,canActivate:[RoutesGuard]},
  {path: 'users/:userid/profil/update', component: UserCardComponent,canActivate:[RoutesGuard]},
  {path: 'users/:userid/barters', component: AnnoncesComponent,canActivate:[RoutesGuard]},
  {path: 'login', component: LoginComponent,canActivate:[LoginGuard]},
  {path: 'signup', component: UserFormComponent,canActivate:[LoginGuard]},
  {path: 'users/:userid/notifications', component: UserNotificationComponent ,canActivate:[RoutesGuard]},
  {path: 'mentions', component: MentionsComponent},
  {path: 'politique', component: PolitiqueComponent},
  {path: 'charte', component: CharteComponent},
  {path: 'cgu', component: CguComponent},
  {path: 'admin/users', component: ProfilAdminComponent,canActivate:[AdminGuard]},
  {path: 'admin/users/:userid/barters', component: AnnoncesComponent,canActivate:[AdminGuard]},
  {path :"admin/barters/:id", component : DetailsAnnonceComponent,canActivate:[AdminGuard]},
  {path:'**',redirectTo:'/accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

