import { Injectable } from '@angular/core';
// Digunakan untuk request ke api
import { HttpClient, HttpResponse } from '@angular/common/http';
// Berisi sumber data yang nantinya akan di subscribe
import { Observable } from 'rxjs';
// Operator untuk mapping yang disediakan oleh rxjs
import { map } from 'rxjs/operators';
// Model response
import { FilmResponse } from '../models/film_response';
import { Film } from '../models/film';


@Injectable()
export class FilmsService {
  urlGet = 'https://ghibliapi.herokuapp.com/films';
  urlGetId = 'https://ghibliapi.herokuapp.com/films';
  // Buat variable imageserver dan token image
  imageServer = "https://firebasestorage.googleapis.com/v0/b/ghibli-angular-4.appspot.com/o/";
  tokenImage = "?alt=media&token=d0452e8a-6be1-41d0-87c0-afae5f618501";

  // Inisialisasi http di constructor
  constructor(
    private http: HttpClient
  ) {}
  
  // fungsi mengambil data film di api
  fetchDataFilms(): Observable<String> {
    return this.http.get<any>(this.urlGet)
      .pipe(map((response: any) => {
        // console.log('url', response)
        return response;
      })
    );
  }

  // fungsi untuk mendapatkan link image
  getImage(filmId: string): string{
    return this.imageServer + filmId + ".jpg" + this.tokenImage;
  }

  
  // fungsi mengambil data film id di api
  fetchDataFilmsId(_id: String): Observable<String> {
    return this.http.get<any>(this.urlGetId + '/' + _id)
      .pipe(map((response: any) => {
        // console.log('url', response)
        return response;
      })
    );
  }
  
}