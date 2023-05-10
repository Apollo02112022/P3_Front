import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  
  appComponent: any;

  constructor (private router: Router) {}

  ngOnInit() {
    this.appComponent.isHomePage = true;
  }

select() {
  this.router.navigate(["/barters"]);
}
}
