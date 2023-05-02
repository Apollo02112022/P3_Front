// Validator utilisé pour le département. Le département doit comporter uniquement des chiffres. 

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {
    const isNumber = /^\d+$/.test(control.value);
    return isNumber ? null : { 'numberOnly': true };
    
  };
}


// Cette fonction permet de vérifier si une valeur saisie ne contient que des chiffres.

// La première ligne import { AbstractControl, ValidatorFn } from '@angular/forms'; importe les modules 
// AbstractControl et ValidatorFn de la bibliothèque @angular/forms.

// La fonction numberValidator est une fonction qui retourne une fonction qui sera utilisée comme validateur personnalisé 
// dans le formulaire.

// La fonction retournée a la signature suivante : (control: AbstractControl): { [key: string]: any } | null => { ... }. Elle 
// prend un AbstractControl en paramètre, qui représente le champ de saisie à valider, et renvoie un objet contenant une erreur 
// si la validation échoue, ou null si la validation réussit.

// À l'intérieur de la fonction, une expression régulière a été créé afin de tester si la valeur saisie ne contient que 
// des chiffres : const isNumber = /^\d+$/.test(control.value);. Cette expression régulière vérifie si la valeur saisie 
// (control.value) est une chaîne de caractères contenant uniquement des chiffres (^\d+$).
// Ensuite, un objet d'erreur {'numberOnly': true} peut être retourné si la valeur saisie ne contient pas que des chiffres,
// ou null si la validation réussit. 
