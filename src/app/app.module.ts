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
import { AccueilComponent } from './accueil/accueil.component';
import { SwitchComponent } from './switch/switch.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PageStatiqueComponent } from './page-statique/page-statique.component';

@NgModule({
  declarations: [						
    AppComponent,
    AccueilComponent,
    SwitchComponent,
    AnnoncesComponent,
    AddAnnonceComponent,
    UpdateAnnonceComponent,
    DetailsAnnonceComponent,
    PropositionTrocComponent,
    FooterComponent,
    MainComponent,
    PageStatiqueComponent
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
