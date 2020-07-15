import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import model
import { Film } from '../models/film';

// import service
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {
  filmsId: String;
  films: Film;

  constructor(
    private activedRoute: ActivatedRoute,
    private filmService: FilmsService,
  ) { 
    this.filmsId = activedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.onGetId();
  }

  onGetId(): void {
    // Menjalankan service
    this.filmService.fetchDataFilmsId(this.filmsId).subscribe((response: any) => {
      // Mengisi variable films dengan data response film
      this.films = response;
      console.log('Data', this.films)
    })
  }

}
