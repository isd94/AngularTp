import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { BehaviorSubject } from 'rxjs';
import { Fichetech } from '../models/fiche.tech.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public films: BehaviorSubject < Film [] > = new BehaviorSubject([

    new Film ('Spider-man : Far From Home',
    'https://www.cinemondium.com/wp-content/uploads/2018/12/5c7b2cdf78a2d3b7851f7b62df716225.jpg',
    // tslint:disable-next-line:max-line-length
    'Spider-Man: Far From Home est un film de super-héros américain réalisé par Jon Watts, prévu pour 2019. Vingt-troisième film de lunivers cinématographique Marvel et premier de la phase IV, il fait suite à Spider-Man: Homecoming, du même réalisateur, sorti en 2017.',
     'Action', 2019, 2000, [new Fichetech('Jon Watts', '2 heures', 'Tom Holland')]),

     new Film ('Avengers 4',
    // tslint:disable-next-line:max-line-length
    'https://www.journaldugeek.com/content/uploads/2018/10/avengers-4-fond-decran-hd-arriere-plan-2250x1266-id948857-alphacoderscom-2124515.jpg',
    // tslint:disable-next-line:max-line-length
    'Avengers: Endgame ou Avengers : Phase Finale au Québec est un film américain réalisé par Anthony et Joe Russo, dont la sortie est prévue en 2019. Il est établi sur léquipe de super-héros tirée des comics Marvel, les Avengers.',
    // tslint:disable-next-line:max-line-length
    'Action', 2019, 2000, [new Fichetech(' Anthony et Joe Russo', '2 heures', 'Chris Evans,  Robert Downey Jr,  Scarlett Johansson,  Mark Ruffalo,  Chris Hemsworth')]),

    new Film ('Fast & Furious : Hobbs and Shaw',
    'https://media.senscritique.com/media/000017919969/source_big/Fast_Furious_Presents_Hobbs_Shaw.jpg',
    'Fast and Furious : Hobbs & Shaw est un film daction américain réalisé par David Leitch, dont la sortie est prévue pour 2019.',
    'Action', 2019, 2000, [new Fichetech('David Leitch', '2 heures', 'Dwayne Johnson, Jason Statham')]),

  ]);
  public film: BehaviorSubject<Film> = new BehaviorSubject(this.films.value[0]);

  selectFilm(index: number): void {
    this.film.next(this.films.value[index]);
  }
  constructor() { }
}
