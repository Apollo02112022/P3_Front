import { AccueilComponent } from './accueil/accueil.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularDeleteAccountComponent } from './userProfilModal/user-card/user-card-formular/formular-delete-account/formular-delete-account.component';
import { FormularMailChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-mail-change/formular-mail-change.component';
import { FormularPasswordChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-password-change/formular-password-change.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PropositionTrocComponent } from './proposition-troc/proposition-troc.component';
import { SwitchComponent } from './switch/switch.component';
import { UserCardButtonComponent } from './userProfilModal/user-card/user-card-button/user-card-button.component';
import { UserCardComponent } from './userProfilModal/user-card/user-card.component';
import { UserCardFormularComponent } from './userProfilModal/user-card/user-card-formular/user-card-formular.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { CguComponent } from './cgu/cgu.component';
import { CharteComponent } from './charte/charte.component';
import { MentionsComponent } from './mentions/mentions.component';
import { PolitiqueComponent } from './politique/politique.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';


@NgModule({

  declarations: [						
    AccueilComponent,
    AddAnnonceComponent,
    AnnoncesComponent,
    AppComponent,
    DetailsAnnonceComponent,
    FooterComponent,
    FormularDeleteAccountComponent,
    FormularMailChangeComponent,
    FormularPasswordChangeComponent,
    LoginComponent,
    PropositionTrocComponent,
    SwitchComponent,
    UserCardButtonComponent,
    UserCardComponent,
    UserCardFormularComponent,
    UserFormComponent,
    FileUploadComponent,
    HeaderComponent,
    UserNotificationComponent,
    CguComponent,
    CharteComponent,
    MentionsComponent,
    PolitiqueComponent,
    ProfilAdminComponent,
   ],
   
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
   ],
  
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule { }
