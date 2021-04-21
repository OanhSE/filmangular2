import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './cinema.component';
import { ListCinemaComponent } from './list-cinema/list-cinema.component';

const routes: Routes = [
  { path: '', component: CinemaComponent,
    children: [
      { path: '', component: ListCinemaComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoutingModule { }
