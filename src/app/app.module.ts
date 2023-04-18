import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { UserCardComponent } from './userProfilModal/user-card/user-card.component';
import { UserCardFormularComponent } from './userProfilModal/user-card/user-card-formular/user-card-formular.component';
import { UserCardButtonComponent } from './userProfilModal/user-card/user-card-button/user-card-button.component';
import { FormularPasswordChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-password-change/formular-password-change.component';
import { FormularMailChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-mail-change/formular-mail-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularDeleteAccountComponent } from './userProfilModal/user-card/user-card-formular/formular-delete-account/formular-delete-account.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { PropositionTrocComponent } from './proposition-troc/proposition-troc.component';

@NgModule({

  declarations: [						
    AppComponent,
    AnnoncesComponent,
    AddAnnonceComponent,
    DetailsAnnonceComponent,
    PropositionTrocComponent,
    UserCardComponent,
    UserCardFormularComponent,
    UserCardButtonComponent,
    FormularPasswordChangeComponent,
    FormularMailChangeComponent,
    FormularDeleteAccountComponent,
    UserFormComponent,
    FileUploadComponent
   ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule { }
