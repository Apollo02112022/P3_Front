import { Category } from "./category.model";

export class Annonce{
    idAnnonce!: number;
    imageAnnonce?: string;
    description? : string;
    dateCreation!: Date;
    category!: Category;
}