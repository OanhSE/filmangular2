export class Film{
  id: string;
  name: string;
  duration: number;
  genres: string;
  actor: string;
  year: string;
  startFrom: Date;
  category: string;
  language: string;
  description: string;
  image: string;
  urltrailer: string;
  status: number;
  startdate: Date;
  imageLandscape: string ;
  trailer: string ;


  constructor(id: string, name: string, duration: number, genres: string, actor: string, year: string, startFrom: Date, category: string, language: string, description: string, image: string, urltrailer: string, status: number, startdate: Date, imageLandscape: string, trailer: string) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.genres = genres;
    this.actor = actor;
    this.year = year;
    this.startFrom = startFrom;
    this.category = category;
    this.language = language;
    this.description = description;
    this.image = image;
    this.urltrailer = urltrailer;
    this.status = status;
    this.startdate = startdate;
    this.imageLandscape = imageLandscape;
    this.trailer = trailer;
  }
}
