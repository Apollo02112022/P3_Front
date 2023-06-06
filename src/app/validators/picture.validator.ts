// Validator utilisé pour la photo. La photo doit être au format PNG. 

import { AbstractControl } from '@angular/forms'; 

export function pictureValidator(control: AbstractControl): {[key: string]: any} | null {

    const file = control.value;
    const valid = /\.(png|jpe?g)$/i.test(file.name);
    return valid ? null : { invalidFileType: { valid: false, value: file.type } };

}
