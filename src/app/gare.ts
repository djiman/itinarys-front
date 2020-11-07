import { LinkDTO } from './link';

export class GareDTO {
    gare: string;
    ordre: number;
    coordonnee: number;
    type:string;
    linksBus:Array<LinkDTO>;
    linksTrain:Array<LinkDTO>;
}