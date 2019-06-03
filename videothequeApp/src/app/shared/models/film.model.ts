import { Fichetech } from './fiche.tech.model';

export class Film {
    // tslint:disable-next-line:max-line-length
    constructor(public name: string,
                public img: string,
                public desc: string,
                public genre: string,
                public year: number,
                public price: number ,
                public fichetechnique: Fichetech []) {
        }
}
