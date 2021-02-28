import {Injectable} from '@angular/core';
import { BehaviorSubject, Subscription} from 'rxjs';
import {displayedTime} from '../interfaces/displayed-time';


@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  private timeForDisplay: displayedTime = {
    minutes: '00',
    seconds: '00',
    milliseconds: '00'
  };

  public timerStream$: BehaviorSubject<displayedTime> = new BehaviorSubject<displayedTime>(this.timeForDisplay);

  constructor() {
  }

  convertTime(counter): void {
    const seconds = Math.floor(Math.floor(counter % 60000) / 1000).toFixed(0);
    const minutes: number = Math.floor(counter / 60000);
    const milliseconds = Math.floor(Math.floor(counter % 1000) / 10).toFixed(0);

    this.timeForDisplay.minutes = minutes < 10 ? String(`0${minutes}`) : String(minutes);
    this.timeForDisplay.milliseconds = Number(milliseconds) < 10 ? String(`0${milliseconds}`) : String(milliseconds);
    this.timeForDisplay.seconds = Number(seconds) < 10 ? String(`0${seconds}`) : String(seconds);

    this.timerStream$.next(this.timeForDisplay);
  }

}
