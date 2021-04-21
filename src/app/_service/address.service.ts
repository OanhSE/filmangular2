import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Address} from '../_models/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addressSubject: BehaviorSubject<Address>;
  public address: Observable<Address>;
  public addressvalue: Address ;
  public url = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.addressSubject = new BehaviorSubject<Address>(this.addressvalue);
    this.address = this.addressSubject.asObservable();
  }
  public get addressValue(): Address {
    return this.addressSubject.value;

  }
  // getallAddress
  getAll(): Observable<Address[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
    return this.http.get<Address[]>(this.url + 'getAddress');
  }
}
