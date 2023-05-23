/* Validator utilisé pour le pseudo. L'utilisateur doit rentrer un pseudo ne comprenant pas de caractères spéciaux ni d'espace.*/

import { AbstractControl } from '@angular/forms';

export function usernameValidator(control: AbstractControl): { [key: string]: boolean } | null {
  
  const value = control.value;  
  const regex = /^[a-z0-9]+$/i;
    if (!regex.test(value)) {
      return { username: true };
    }
    else {
      return null;
    }
    
} 

  
// Cette fonction importe la classe AbstractControl depuis le module @angular/forms, qui est une classe de base pour les contrôles 
// de formulaire.

// La fonction usernameValidator() prend un paramètre de type AbstractControl (un contrôle de formulaire) et retourne un objet 
// qui peut contenir une erreur de validation (sous la forme d'un objet avec une clé et une valeur).

// La fonction récupère la valeur du contrôle de formulaire avec control.value. Elle créé ensuite une expression régulière avec la syntaxe 
// /^[a-z0-9]+$/i, qui vérifie que la valeur contient uniquement des lettres minuscules ou des chiffres (0-9). Cette expression régulière 
// est utilisée pour valider la valeur du champ de formulaire.

// La fonction utilise la méthode test() de l'objet RegExp pour vérifier si la valeur du champ de formulaire correspond à 
// l'expression régulière. Si la valeur ne correspond pas à l'expression régulière, la fonction retourne un objet avec une 
// clé 'username' et une valeur booléenne true, indiquant que la validation a échoué et que la valeur saisie n'est pas un 
// nom d'utilisateur valide. 

// Si la valeur correspond à l'expression régulière, la fonction retourne null, indiquant que la validation a réussi et que 
// la valeur est considérée comme valide.
