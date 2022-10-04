import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@app/services/data.service';
import { map, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css'],
})
export class PeopleDetailComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  private id!: number;

  private _getPeopleDetail!: Observable<any>;
  public _peopleDetail!: Observable<any>;
  public _homeWorldLink!: Observable<any>;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => this.id = +params['id']);
  }

  ngOnInit(): void {
    this._getPeopleDetail = this.dataService.getPeopleDetail(this.id);
    this._peopleDetail = this._getPeopleDetail;
    this._homeWorldLink = this._getPeopleDetail
      .pipe(
        map((data: any) => data.homeworld),
        switchMap((data: any) => this.dataService.getHomeWorld(data)),
        map((data: any) => data.name),
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
