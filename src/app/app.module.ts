import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './userProfilModal/user-card/user-card.component';
import { UserCardFormularComponent } from './userProfilModal/user-card/user-card-formular/user-card-formular.component';
import { UserCardButtonComponent } from './userProfilModal/user-card/user-card-button/user-card-button.component';
import { FormularPasswordChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-password-change/formular-password-change.component';
import { FormularMailChangeComponent } from './userProfilModal/user-card/user-card-formular/formular-mail-change/formular-mail-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserCardFormularComponent,
    UserCardButtonComponent,
    FormularPasswordChangeComponent,
    FormularMailChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
