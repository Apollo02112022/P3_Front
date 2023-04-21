import { Category } from "./category.model";

export class Annonce {
    id!: number;
    announcement_picture!: any;
    description!: string;
    dateCreation!: Date;
    imageUrl?:string;
    // category!: Category;
}