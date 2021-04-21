import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {
  cinema  =  {
    "DivisionCode": 1,
    "DetailDivisionCode": "0001",
    "DetailDivisionName": null,
    "CinemaID": 8009,
    "CinemaNameUS": null,
    "CinemaName": "Cantavil",
    "SortSequence": 1,
    "Latitude": null,
    "Longitude": null,
    "Distance": 0.0,
    "SmartOrderYN": null,
    "address": "Tầng 7, Cantavil Premier, Số 1 đường Song Hành, Xa lộ Hà Nội, P.An Phú, Q.2, TP.HCM, Việt Nam",
    "rooms": 8,
    "seats": 1043
  }
  constructor() { }

  ngOnInit(): void {
  }

}
