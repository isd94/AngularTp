import { Component, OnInit } from '@angular/core';
import { FilmService } from '../shared/services/film.service';

@Component({
  selector: 'app-films-container',
  templateUrl: './films-container.component.html',
  styleUrls: ['./films-container.component.css'],
  providers: [FilmService]
})
export class FilmsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
