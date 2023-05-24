// Validator utilisé pour le mot de passe. Le mot de passe doit comporter au minimum une majuscule, un chiffre, un 
// caractère spécial et aucun espace.

import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  
  const password = control.value;
  const number = /\d/.test(password);
  const uppercase = /[A-Z]/.test(password);
  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?¤£€]/.test(password);
  const space = /\s/.test(password);
  const valid = number && uppercase && specialChar && !space;

  return valid ? null : { invalidPassword: true };

} 
