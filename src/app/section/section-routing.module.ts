import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StopWatchComponent} from './stop-watch/stop-watch.component';

const routes: Routes = [
  {
    path: '',
    component: StopWatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SectionRoutingModule {}
