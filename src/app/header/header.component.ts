import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  hidden: boolean = true;

  constructor (private router: Router) {
    if (this.router.url === '/' || this.router.url === '/accueil') {
      this.hidden = false;
    
  }

}
  
}
