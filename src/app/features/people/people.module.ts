import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleHeightPipe } from '@app/pipes/people-height.pipe';
import { PeopleDetailComponent } from '@app/features/people/people-detail/people-detail.component';
import { PeopleListComponent } from '@app/features/people/people-list/people-list.component';

const routes: Routes = [
  {
    path: '', component: PeopleListComponent
  },
  {
    path: ':id', component: PeopleDetailComponent
  },
]

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailComponent, PeopleHeightPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PeopleModule { }
