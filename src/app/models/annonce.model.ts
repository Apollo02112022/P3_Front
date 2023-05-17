import { User } from "../user-form/models/user-form.model";


export class Annonce {
    id!: number;
    announcement_picture!: any;
    description!: string;
    dateCreation!: Date;
    imageUrl?:string;
    user?:User;
  }