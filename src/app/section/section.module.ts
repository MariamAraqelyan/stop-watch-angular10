import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SectionRoutingModule} from './section-routing.module';
import { SectionComponent } from './section/section.component';
import {StopWatchModule} from './stop-watch/stop-watch.module';

@NgModule({
  declarations: [
    SectionComponent
  ],
  exports: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    StopWatchModule
  ]
})
export class SectionModule { }
