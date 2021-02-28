import {Component, Injector, Input, OnDestroy, OnInit} from '@angular/core';
import {displayedTime} from '../../shared/interfaces/displayed-time';
import {StopwatchStatus} from '../../shared/models/stopwatch-status/stopwatch-status';
import {StopwatchService} from '../../shared/services/stopwatch.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})

export class StopWatchComponent implements OnInit, OnDestroy {

  private timeForDisplay: displayedTime = {
    minutes: '00',
    seconds: '00',
    milliseconds: '00'
  };

  public laps: any = [];
  public counter: number;
  public timerRef;
  public running: boolean = false;
  public startText: string = StopwatchStatus.START;

  public stopwatchService: StopwatchService;
  public subscription: Subscription;

  constructor(public injector: Injector) {
    this.stopwatchService = injector.get(StopwatchService);
  }

  ngOnInit(): void {
  }

  startTimer(): void {
    this.running = !this.running;
    if (this.running) {
      this.startText = StopwatchStatus.STOP;
      this.subscription = this.stopwatchService.timerStream$.subscribe(time => {
        this.timeForDisplay = time;
      });
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.stopwatchService.convertTime(this.counter);
      });

    } else {
      this.startText = StopwatchStatus.RESUME;
      clearInterval(this.timerRef);
    }
  }

  lapTimeSplit(): void {
    const lapTime = String(`${this.timeForDisplay.minutes}:${this.timeForDisplay.seconds}:${this.timeForDisplay.milliseconds}`);
    this.laps.push(lapTime);
  }

  clearTimer() {
    this.running = false;
    this.startText = StopwatchStatus.START;
    this.counter = undefined;

    for(let item in this.timeForDisplay){
      this.timeForDisplay[item] = '00';
    }

    this.laps = [];
    clearInterval(this.timerRef);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerRef);
    this.subscription.unsubscribe();
  }
}
