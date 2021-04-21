import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }
