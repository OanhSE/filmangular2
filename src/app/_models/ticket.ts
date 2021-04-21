import {FilmSession} from './filmSession';
import {User} from './user';

export class Ticket{
  id: number;
  time: Date;
  filmSession: FilmSession;
  price: number;
  user: User;

  constructor(id: number, time: Date, filmSession: FilmSession, price: number, user: User) {
    this.id = id;
    this.time = time;
    this.filmSession = filmSession;
    this.price = price;
    this.user = user;
  }
}
