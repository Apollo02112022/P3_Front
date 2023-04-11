import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { FormsModule } from '@angular/forms';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { HttpClientModule } from '@angular/common/http'
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { PropositionTrocComponent } from './proposition-troc/proposition-troc.component';

@NgModule({
  declarations: [						
    AppComponent,
    AnnoncesComponent,
      AddAnnonceComponent,
      UpdateAnnonceComponent,
      DetailsAnnonceComponent,
      PropositionTrocComponent
   ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
