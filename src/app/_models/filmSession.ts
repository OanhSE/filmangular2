import {Hall} from './hall';
import {Ticket} from './ticket';

export class FilmSession {
  id: number;
  date: Date;
  idFilm: File;
  hallId: Hall;
  tickets: Set<Ticket>;

  constructor(id: number, date: Date, idFilm: File, hallId: Hall) {
    this.id = id;
    this.date = date;
    this.idFilm = idFilm;
    this.hallId = hallId;
  }
}
