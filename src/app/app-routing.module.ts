import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardButtonComponent } from './userProfilModal/user-card/user-card-button/user-card-button.component';
import { UserCardComponent } from './userProfilModal/user-card/user-card.component';
import { UserCardFormularComponent } from './userProfilModal/user-card/user-card-formular/user-card-formular.component';

const routes: Routes = [
  { path: 'users/:userid/profil', component: UserCardComponent },
  { path: 'users/:userid/profil/update', component: UserCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

