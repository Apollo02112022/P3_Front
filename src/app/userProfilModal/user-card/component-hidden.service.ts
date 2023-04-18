import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ComponentHiddenService {

    private hidden = true;

    getHidden():boolean{
        return this.hidden;
    }

    setHidden():void{
        this.hidden = !this.hidden
    }


}