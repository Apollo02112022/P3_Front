/* Validator utilisé pour le nom et le prénom. L'utilisateur doit rentrer un nom ou un prénom commençant obligatoirement par une 
lettre majuscule et ne comprenant pas de chiffres, de caractères spéciaux ou d'espace.*/

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function userValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    const firstLetter = value.charAt(0);
    const regex = /^[A-Z][a-zA-Z]*$/;

    if (!regex.test(value)) {
      console.log('Champ non valide.');
      return {'invalidFormat': {value}};
    }
    else {
      console.log('Champ valide.');
      return null;
    }
    
  };
}

// Cette fonction importe deux classes du module @angular/forms : AbstractControl et ValidatorFn. AbstractControl est une classe de base 
// pour les contrôles de formulaire, et ValidatorFn est une interface pour les fonctions de validation. 

// La fonction userValidator() retourne une fonction anonyme qui prend un paramètre de type AbstractControl (un contrôle de formulaire) 
// et retourne un objet qui peut contenir une erreur de validation (sous la forme d'un objet avec une clé et une valeur). 

// Cette fonction anonyme effectue plusieurs vérifications sur la valeur du contrôle. Tout d'abord, elle récupère la valeur du contrôle 
// avec control.value, puis elle récupère la première lettre de la valeur avec value.charAt(0) et la fonction crée une expression régulière 
// avec la syntaxe /^[A-Z][a-zA-Z]*$/, qui vérifie que la valeur commence par une lettre majuscule suivie de zéro ou plusieurs lettres 
// minuscules ou majuscules. 

// Si la valeur de contrôle ne correspond pas à l'expression régulière, la fonction retourne un objet qui contient une clé 'invalidFormat' 
// avec une valeur qui est elle-même un objet contenant la valeur saisie dans le champ de formulaire. Cet objet est utilisé pour signaler 
// une erreur de validation à Angular, qui peut alors afficher un message d'erreur correspondant au champ de formulaire. Par exemple, si 
// un champ d'entrée de nom d'utilisateur est invalide, Angular peut afficher un message d'erreur "Format de nom d'utilisateur invalide" 
// près du champ de formulaire.

// Dans le cas contraire, si la valeur correspond à l'expression régulière alors la fonction retourne null, ce qui signifie que la 
// validation a réussi et que la valeur est considérée comme valide.
