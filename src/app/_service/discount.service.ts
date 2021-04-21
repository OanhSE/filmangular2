import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Discount} from '../_models/discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private discountsSubject: BehaviorSubject<Discount>;
  public discount: Observable<Discount>;
  public discountvalue: Discount ;
  public url = '';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.discountsSubject = new BehaviorSubject<Discount>(this.discountvalue);
    this.discount = this.discountsSubject.asObservable();
  }
  public get movieValue(): Discount {
    return this.discountsSubject.value;

  }
  // getallDiscount
  getAll(): Observable<Discount[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<Discount[]>(this.url + 'getDiscounts');
  }
}
