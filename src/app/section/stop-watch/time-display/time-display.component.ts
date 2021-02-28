import {Component, Input, OnInit} from '@angular/core';
import {displayedTime} from '../../../shared/interfaces/displayed-time';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() timeForDisplay: displayedTime;

  constructor() {
  }

  ngOnInit(): void {
  }

}
