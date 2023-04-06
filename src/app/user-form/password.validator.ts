/* Validator utilisé pour le mot de passe. Le mot de passe doit comporter au minimum 12 caractères, une majuscule, un chiffre, un 
caractère spécial et aucun espace.*/

import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.value;
  const number = /\d/.test(password);
  const uppercase = /[A-Z]/.test(password);
  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const space = /\s/.test(password);
  const valid = number && uppercase && specialChar && !space;

  return valid ? null : { invalidPassword: true };
} 


// La fonction importe les classes AbstractControl et ValidationErrors depuis le module @angular/forms, qui sont utilisées pour 
// définir et valider les contrôles de formulaire. 

// La fonction passwordValidator() prend un paramètre de type AbstractControl (un contrôle de formulaire) et retourne un objet 
// qui peut contenir une erreur de validation (sous la forme d'un objet avec une clé et une valeur). 

// La fonction commence par récupérer la valeur du champ de formulaire avec control.value et la stocke dans une variable 
// password.

// Ensuite, la fonction utilise des expressions régulières pour vérifier si le mot de passe contient :

// - au moins un chiffre (number)
// - au moins une lettre majuscule (uppercase)
// - au moins un caractère spécial (specialChar)
// - aucun espace (space)

// Ces vérifications sont stockées dans des variables booléennes, qui sont ensuite utilisées pour déterminer si le mot 
// de passe est valide ou non. 

// Si le mot de passe est valide, c'est-à-dire s'il contient un chiffre, une lettre majuscule, un caractère spécial et 
// aucun espace, la fonction retourne null . Si le mot de passe n'est pas valide alors la fonction retourne un objet avec une clé 
// 'invalidPassword' et une valeur booléenne true pour signaler une erreur de validation à Angular. 
