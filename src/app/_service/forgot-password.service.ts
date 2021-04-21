import { Injectable } from '@angular/core';
import {ForgotPasswordRequest} from '../_models/forgot-password-request';
import {BehaviorSubject, Observable} from 'rxjs';
import {Film} from '../_models/film';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private forgotPasswordRequestSubject: BehaviorSubject<ForgotPasswordRequest>;
  public forgotPasswordRequest: Observable<ForgotPasswordRequest>;
  public forgotPasswordRequestvalue: ForgotPasswordRequest ;
  public url = '';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.forgotPasswordRequestSubject = new BehaviorSubject<ForgotPasswordRequest>(this.forgotPasswordRequestvalue);
    this.forgotPasswordRequest = this.forgotPasswordRequestSubject.asObservable();
  }
  public get forgotPasswordRequestValue(): ForgotPasswordRequest {
    return this.forgotPasswordRequestSubject.value;

  }

  forgotPassword(request: ForgotPasswordRequest): Observable<ForgotPasswordRequest>  {
    return this.http.get<ForgotPasswordRequest>(this.url + 'ForgotPasswordRequest');
  }
}
