import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Hall} from '../_models/hall';

@Injectable({
  providedIn: 'root'
})
export class HallService {
  private hallsSubject: BehaviorSubject<Hall>;
  public hall: Observable<Hall>;
  public hallvalue: Hall ;
  public url = '';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.hallsSubject = new BehaviorSubject<Hall>(this.hallvalue);
    this.hall = this.hallsSubject.asObservable();
  }
  public get movieValue(): Hall {
    return this.hallsSubject.value;

  }
  // getallhall
  getAll(): Observable<Hall[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<Hall[]>(this.url + 'getHalls');
  }

}
