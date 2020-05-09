import { GareDTO } from './gare';

export class LigneDTO {
    nomLigne: string;
    type: string;
    statut:string;
    commentaire: string;
    garesDto:Array<GareDTO>;
    intervalleArret:number;
}