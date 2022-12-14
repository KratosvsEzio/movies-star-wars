import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  private url!: string;

  public _peopleList!: Observable<any>;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this._peopleList = this.dataService._list
      .pipe(map((data: any) => data?.results));
  }

  navigate(value: any) {
    this.url = value.replace(/[\D]/g, '');
    this.router.navigate(['/people/', this.url]);
    this.dataService.isHeader = false;
  }
}
