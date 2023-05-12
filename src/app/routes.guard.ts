import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {
  constructor (private tokenService : TokenService, private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!localStorage.getItem("token")) {
        alert("Pour accèder, connectez-vous ou créez un compte.")
        this.router.navigate(['login']); // Redirige l'utilisateur vers la page de connexion si le token est invalide
        return false;
      }
      return true; // Autorise l'accès si le token est valide
    }
}
