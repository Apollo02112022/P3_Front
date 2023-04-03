import { AbstractControl } from '@angular/forms'; 

export function pictureValidator(control: AbstractControl): {[key: string]: any} | null {
    const file = control.value;
    const valid = /\.jpg$/i.test(file.name);
    return valid ? null : { invalidFileType: { valid: false, value: file.type } };
  }

  