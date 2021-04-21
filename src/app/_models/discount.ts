import {User} from './user';

export class Discount {
  id: number;
  name: string;
  description: string;
  percent: number;
  users: Set<User>;

  constructor(id: number, name: string, description: string, percent: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.percent = percent;
  }
}
