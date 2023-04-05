import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { FormsModule } from '@angular/forms';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
@NgModule({
  declarations: [			
    AppComponent,
    AnnoncesComponent,
      AddAnnonceComponent,
      UpdateAnnonceComponent
   ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
