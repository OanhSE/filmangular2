import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Cinema} from '../_models/cinema';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private cinemasSubject: BehaviorSubject<Cinema>;
  public cinema: Observable<Cinema>;
  public cinemavalue: Cinema ;
  public url = 'https://02f372f8-2841-4c6d-bae5-7b7a74b80923.mock.pstmn.io/getCinemas?fbclid=IwAR22sNvHt-UZ_2z8YzPPyBzBbTXQRaz9i-wlTMVP1ZS7jvecGkHCcdpI3EA';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.cinemasSubject = new BehaviorSubject<Cinema>(this.cinemavalue);
    this.cinema = this.cinemasSubject.asObservable();
  }
  public get cinemaValue(): Cinema {
    return this.cinemasSubject.value;

  }
  // getallcinema
  getAll(): Observable<Cinema[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<Cinema[]>(this.url );
  }
}
