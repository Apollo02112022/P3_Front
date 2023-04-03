import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [		
    AppComponent,
    AnnoncesComponent,
      AddAnnonceComponent
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
