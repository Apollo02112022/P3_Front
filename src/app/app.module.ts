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
import { FormularPictureChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-picture-change/formular-picture-change.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PropositionTrocComponent } from './proposition-troc/proposition-troc.component';
import { SwitchComponent } from './switch/switch.component';
import { UserAnnoucementComponent } from './user-annoucement/user-annoucement.component';
import { UserCardButtonComponent } from './userProfilModal/user-card/user-card-button/user-card-button.component';
import { UserCardComponent } from './userProfilModal/user-card/user-card.component';
import { UserCardFormularComponent } from './userProfilModal/user-card/user-card-formular/user-card-formular.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TokenService } from './services/token.service';


@NgModule({

  declarations: [						
    AccueilComponent,
    AddAnnonceComponent,
    AnnoncesComponent,
    AppComponent,
    DetailsAnnonceComponent,
    FileUploadComponent,
    FooterComponent,
    FormularDeleteAccountComponent,
    FormularMailChangeComponent,
    FormularPasswordChangeComponent,
    FormularPictureChangeComponent,
    HeaderComponent,
    LoginComponent,
    PropositionTrocComponent,
    SwitchComponent,
    UserAnnoucementComponent,
    UserCardButtonComponent,
    UserCardComponent,
    UserCardFormularComponent,
    UserFormComponent,
    FileUploadComponent,
    LogoutComponent,
    UserAnnoucementComponent,
    HeaderComponent,
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
