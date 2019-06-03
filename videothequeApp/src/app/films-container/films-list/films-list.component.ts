import { Component, OnInit, } from '@angular/core';
import { Film } from '../../shared/models/film.model';
import { FilmService } from '../../shared/services/film.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit {
public films: Film[];
public activeFilm = 0;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.films.subscribe( ( films: Film[] ) => {
      this.films = films;
    });
  }

  pickFilm(index: number): void {
    this.activeFilm = index;
    this.filmService.selectFilm(index);
  }

}
