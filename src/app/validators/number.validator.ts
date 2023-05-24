// Validator utilisé pour le code postal. Le code postal doit comporter uniquement des chiffres. 

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const isNumber = /^\d+$/.test(control.value);
    return isNumber ? null : { 'numberOnly': true };
    
  };
}
