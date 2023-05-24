/* Validator utilisé pour le pseudo. L'utilisateur doit rentrer un pseudo ne comprenant pas de caractères spéciaux ni d'espace.*/

import { AbstractControl } from '@angular/forms';

export function usernameValidator(control: AbstractControl): { [key: string]: boolean } | null {
  
  const value = control.value;  
  const regex = /^[a-z0-9]+$/i;
    if (!regex.test(value)) {
      console.log('Pseudo non valide.');
      return { username: true };
    }
    else {
      console.log('Pseudo valide.');
      return null;
    }
    
} 
