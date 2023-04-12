// Validator utilisé pour la photo. La photo doit être au format JPG. 

import { FormControl } from "@angular/forms";

// import { AbstractControl } from '@angular/forms'; 

// export function pictureValidator(control: AbstractControl): {[key: string]: any} | null {
//     const file = control.value;
//     const valid = /\.jpg$/i.test(file.name);
//     return valid ? null : { invalidFileType: { valid: false, value: file.type } };
//   }


export function requiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }
      
      return null;
    }

    return null;
  };
}


  // Cette fonction permet de vérifier si le fichier sélectionné par l'utilisateur est un fichier JPEG.

  // La première ligne import { AbstractControl } from '@angular/forms'; importe le module 
  // AbstractControl de la bibliothèque @angular/forms.

  // La fonction pictureValidator prend un AbstractControl en paramètre, qui représente le champ de saisie de fichier à valider. 
  // La fonction renvoie un objet contenant une erreur si la validation échoue, ou null si la validation réussit.

  // À l'intérieur de la fonction, une variable file a été créé et celle-ci contient la valeur du champ de saisie de 
  // fichier : const file = control.value;. Cette valeur contient des informations sur le fichier sélectionné, telles que 
  // son nom et son type.

  // Ensuite, une expression régulière effectue un test afin de savoir si le nom de fichier se termine par 
  // l'extension ".jpg" (insensible à la casse) : const valid = /\.jpg$/i.test(file.name);.

  // Si le nom de fichier est valide, null est renvoyé pour indiquer que la validation a réussi. Sinon, un objet
  //  d'erreur contenant des informations sur le type de fichier invalide : 
  // { invalidFileType: { valid: false, value: file.type } } est renvoyé.
  