
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkInProgressComponent } from '@app/misc/work-in-progress/work-in-progress.component';

const routes: Routes = [
  {
    path: 'films', loadChildren: () =>
      import('./features/films/films.module').then(
        (m) => m.FilmsModule
      ),
  },
  {
    path: 'people', loadChildren: () =>
      import('./features/people/people.module').then(
        (m) => m.PeopleModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '/films' },
  { path: '**', component: WorkInProgressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
