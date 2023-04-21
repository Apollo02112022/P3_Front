import { Component, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],

  // La ligne 13 définit les fournisseurs de services pour ce composant. Dans ce cas, NG_VALUE_ACCESSOR est fourni 
  // pour permettre à Angular de savoir comment utiliser ce composant comme champ de formulaire.

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent, /*Indique à Angular que FileUploadComponent implémente l'interface NG_VALUE_ACCESSOR, et que cette implémentation doit être utilisée pour communiquer avec les modèles de formulaire.*/
      multi: true /*Le multi: true signifie que plusieurs valeurs d'accessor peuvent être fournies, ce qui est utile dans ce cas puisqu'il y a plusieurs champs dans le formulaire.*/
    }
  ]

})

export class FileUploadComponent {

  selected = false;

  // La ligne 27 définit une propriété onChange qui sera utilisée plus tard pour stocker une fonction de rappel qui 
  // sera appelée lorsque la valeur du champ changera.

  onChange: any;
  
  // La ligne 32 définit une propriété file qui stockera le fichier sélectionné par 
  // l'utilisateur. Elle est initialisée à null pour indiquer qu'aucun fichier n'a été sélectionné.

  public file: File | null = null;

  // La ligne 39 utilise le décorateur @HostListener pour écouter l'événement change sur le champ de fichier 
  // d'entrée. Lorsque l'événement se produit, la fonction emitFiles() est appelée. Cette fonction obtient le fichier sélectionné 
  // par l'utilisateur à partir de la liste de fichiers (FileList) de l'événement et appelle la fonction onChange() avec ce fichier. 
  // Elle stocke également le fichier dans la propriété file.

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
    this.selected = true;
  }

  // La ligne 48 définit le constructeur de la classe. Le paramètre host 
  // est un objet ElementRef qui contient une référence à l'élément DOM qui héberge le composant. Ce paramètre est injecté par Angular.

  constructor( private host: ElementRef<HTMLInputElement>) {
  }

  writeValue( value: null ) { /*writeValue() est utilisée pour effacer la valeur actuelle du champ.*/
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) { /*registerOnChange() est utilisée pour enregistrer une fonction qui sera appelée lorsque la valeur du champ changera.*/
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) { /*registerOnTouched() est utilisée pour enregistrer une fonction qui sera appelée lorsqu'un utilisateur touche le champ.*/
  }

}
