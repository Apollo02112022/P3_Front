/* Validator utilisé pour le nom le prénom et la ville. L'utilisateur doit rentrer un nom, un prénom ou une ville commençant 
obligatoirement par une lettre majuscule et ne comprenant pas de chiffres, de caractères spéciaux. Les espaces sont autorisés*/

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function userValidator(): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {
    const lettersAndSpacesRegex = /^[a-zA-Z\s]*$/;
    const isValid = lettersAndSpacesRegex.test(control.value) && control.value.charAt(0) === control.value.charAt(0).toUpperCase();
    return isValid ? null : { invalidFormat: {value: control.value} };
  };
  
}
