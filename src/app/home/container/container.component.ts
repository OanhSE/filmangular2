import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/_models/User';
import { UserService } from '../../_service/user.service';
import { FilmService } from '../../_service/film.service';
import { Film } from 'src/app/_models/Film';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  user: User;
  listfilms: Film[];
  constructor(
    private userService: UserService,
    private filmService: FilmService
    ) {

    this.userService.user.subscribe(x => this.user = x);

    this.filmService.getAll().subscribe((x)=>{
        this.listfilms = x.movieCommingSoon;
        console.log('listfilm', x.movieCommingSoon);
    });
  }
  ngOnInit(): void {
  }

}
