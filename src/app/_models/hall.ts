import {Cinema} from './cinema';
import {Seat} from './seat';

export class Hall{
  id: number;
  name: string;
  description: string;
  cinema: Cinema;
  seats: Set<Seat>;

  constructor(id: number, name: string, description: string, cinema: Cinema) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cinema = cinema;
  }
}
