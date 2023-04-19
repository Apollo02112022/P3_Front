import { Category } from "./category.model";

export class Annonce {
    id!: number;
    announcement_picture!: string;
    description!: string;
    dateCreation!: Date;
    category!: Category;
}