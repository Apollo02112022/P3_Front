import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  // Propriété qui va déterminer si le footer doit être masqué ou affiché
  hiddenFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
  // écoute les évènements de navigation du 'Router'
    this.router.events.subscribe((event) => {
      // si l'évènement est de type 'NavigationEnd', la navigation sera terminée
      if (event instanceof NavigationEnd) {
        this.hiddenFooter = !this.hidden();
      }
      
    });    
  }

  hidden() {
    return this.router.url === '/' || this.router.url === '/accueil';
  }

  // hidden: boolean = true;

 
  
    
    // if (this.router.url === '/' || this.router.url === '/accueil') {
    //   this.hidden = false;
    // } else (this.router.url === '/barters' || this.router.url === '/offer-a-barter');

  

}

  





  
  

