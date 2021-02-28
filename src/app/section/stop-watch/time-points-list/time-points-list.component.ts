import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-points-list',
  templateUrl: './time-points-list.component.html',
  styleUrls: ['./time-points-list.component.scss']
})
export class TimePointsListComponent implements OnInit {

  @Input() listItems: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
