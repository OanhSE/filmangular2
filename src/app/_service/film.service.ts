import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';
import { Film } from '../_models/film';
import { Cinema } from '../_models/cinema';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmsSubject: BehaviorSubject<Film>;
  public film: Observable<Film>;
  public filmvalue: Film ;
  public url = 'https://02f372f8-2841-4c6d-bae5-7b7a74b80923.mock.pstmn.io';
  private  films: Film[];
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.filmsSubject = new BehaviorSubject<Film>(this.filmvalue);
    this.film = this.filmsSubject.asObservable();
  }
  public get filmValue(): Film {
    return this.filmsSubject.value;

  }
  // getallfilm
  getAll(): Observable<{movieCommingSoon: Film[]}> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);

    return  this.http.get<{movieCommingSoon: Film[]}>(this.url + '//getMoviesComingSoon');

   }
   // getFilmByCinema(cinema: Cinema): Observable<Film[]>{
   //   return this.http.get<Film[]>(this.url);
   // }
  getFilmByCinema(cinema: Cinema): Observable<{movieCommingSoon: Film[]}> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);

    return  this.http.get<{movieCommingSoon: Film[]}>(this.url + '//getMoviesComingSoon');

  }
  addFilm( f: Film): Observable<Film>{
    //  return this.http.post(`${environment.apiUrl}/users/register`, user);
    this.filmsSubject = new BehaviorSubject<Film>(this.filmvalue);
    this.film  = this.filmsSubject.asObservable();
    return this.film
  }
  editFilm( f: Film): Observable<Film>{
    //  return this.http.post(`${environment.apiUrl}/users/register`, user);
    this.filmsSubject = new BehaviorSubject<Film>(this.filmvalue);
    this.film  = this.filmsSubject.asObservable();
    return this.film
  }
  deleteFilm( id: string): Observable<Film>{
    //  return this.http.post(`${environment.apiUrl}/users/register`, user);
    this.filmsSubject = new BehaviorSubject<Film>(this.filmvalue);
    this.film  = this.filmsSubject.asObservable();
    return this.film
  }


}
