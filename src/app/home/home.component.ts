import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmResponse } from '../models/film_response';

// import service
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ FilmResponse ]
})

export class HomeComponent implements OnInit {
  // Deklarasi variable films
  films: Film[];

  constructor(
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.onGet();
  }

  onGet() {
    // Menjalankan service
    this.filmsService.fetchDataFilms().subscribe((response: any) => {
      // Mengisi variable films dengan data response film
      this.films = response;
      console.log('Data', this.films)
    })
  }
}

