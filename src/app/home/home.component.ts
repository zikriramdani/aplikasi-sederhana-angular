import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// import model
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

  // search
  private searchTerm = new Subject<string>();

  constructor(
    private filmsService: FilmsService
  ) {}

  ngOnInit(): void {
    this.onGet();
    
    // this.films = this.searchTerm.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap(
    //     (term: string) => this.filmsService.searchFilm(term)
    //   ),
    // );
  }

  onGet() {
    // Menjalankan service
    this.filmsService.fetchDataFilms().subscribe((response: any) => {
      // Mengisi variable films dengan data response film
      this.films = response;
      console.log('Data', this.films)
    })
  }

  onSearchChange(term: string){
    this.searchTerm.next(term);
    console.log('Teks', this.searchTerm.next(term))
  }

}

