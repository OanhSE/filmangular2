import { Component, OnInit } from '@angular/core';
import {StarRatingColor} from './star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // title = 'filmangular';
  // rating: number = Number(3);
  // starCount: number = Number(5);
  // starColor: StarRatingColor = StarRatingColor.accent;
  // starColorP: StarRatingColor = StarRatingColor.primary;
  // starColorW: StarRatingColor = StarRatingColor.warn;
  // onRatingChanged(rating): void{
  //   console.log(rating);
  //   this.rating = rating;
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
