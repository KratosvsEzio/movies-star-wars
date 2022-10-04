import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmDetailsComponent } from '@app/features/films/film-details/film-details.component';
import { FilmListComponent } from '@app/features/films/film-list/film-list.component';

const routes: Routes = [
  {
    path: '', component: FilmListComponent
  },
  {
    path: ':id', component: FilmDetailsComponent
  }
]

@NgModule({
  declarations: [FilmListComponent, FilmDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
