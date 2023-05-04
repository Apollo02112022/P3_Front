import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentHiddenService } from '../../services/component-hidden.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/user-form/models/user-form.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private componentHiddenService: ComponentHiddenService, private http: HttpClient) { }

  userid = 1;
  imageURL = "http://localhost:8080/users/" + this.userid + "/picture";
  userProfilURL = "http://localhost:8080/users/" + this.userid + "/profil";

  user:User = new User();
  image: ArrayBuffer | string | null = "data:image/jpeg;base64,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";

  ngOnInit(): void {


    //Récupération de l'utilasateur
      this.getUserPseudo(this.userProfilURL).subscribe(
        user => this.user = user
      )
    

    this.getUserPicture(this.imageURL).subscribe(
      (data: Blob) => {
        const reader = new FileReader(); // création d'un objet FileReader pour lire l'image sous forme de blob
        reader.readAsDataURL(data); // lit le blob sous forme d'URL
        reader.onloadend = () => {
          this.image = reader.result; // stock l'URL dans la variable "image"
          console.log(this.image)
        };
      },
      error => {
        console.log(error);
      }
    );

  }

  getHidden(): boolean {
    return this.componentHiddenService.getHidden();

  }

  setHidden(): void {
    this.componentHiddenService.setHidden();
    console.log(this.componentHiddenService.getHidden())
  }

  getUserPicture(imageURL: string): Observable<any> {
    return this.http.get(imageURL, { responseType: 'blob' })
  }

  getUserPseudo(userProfilURL:string) {
    return this.http.get(userProfilURL, httpOptions)
  }
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
