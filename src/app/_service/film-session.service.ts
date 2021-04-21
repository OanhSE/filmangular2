import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {FilmSession} from '../_models/filmSession';
@Injectable({
  providedIn: 'root'
})
export class FilmSessionService {
  private filmSessionsSubject: BehaviorSubject<FilmSession>;
  public filmSession: Observable<FilmSession>;
  public filmSessionvalue: FilmSession ;
  public url = '';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.filmSessionsSubject = new BehaviorSubject<FilmSession>(this.filmSessionvalue);
    this.filmSession = this.filmSessionsSubject.asObservable();
  }
  public get filmSessionValue(): FilmSession {
    return this.filmSessionsSubject.value;

  }
  // getallfilmSession
  getAll(): Observable<FilmSession[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<FilmSession[]>(this.url + 'getFilmSessions');
  }
}
