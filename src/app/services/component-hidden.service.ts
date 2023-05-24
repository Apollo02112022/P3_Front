import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ComponentHiddenService {

    // TODO : un service pour gerer uniquement un booléen ? On pourrait gerer ça directement dans UserCardComponent
    private hidden = true;

    getHidden():boolean{
        return this.hidden;
    }

    setHidden():void{
        this.hidden = !this.hidden
    }


}