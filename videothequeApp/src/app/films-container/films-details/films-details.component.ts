import { Component, OnInit, } from '@angular/core';
import { Film } from '../../shared/models/film.model';
import { FilmService } from '../../shared/services/film.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css'],
})
export class FilmsDetailsComponent implements OnInit {
  public film: Film;


  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.film.subscribe( (film: Film) => {
      this.film = film;
    });
  }

}
