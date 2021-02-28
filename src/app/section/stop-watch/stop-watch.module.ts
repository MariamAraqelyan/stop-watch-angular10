import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopWatchComponent } from './stop-watch.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimePointsListComponent } from './time-points-list/time-points-list.component';

@NgModule({
  declarations: [
    StopWatchComponent,
    TimeDisplayComponent,
    TimePointsListComponent
  ],
  exports: [
    StopWatchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StopWatchModule { }
