import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceCalendarRoutingModule } from './attendance-calendar-routing.module';
import { AttendanceCalendarComponent } from './attendance-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AttendanceCalendarComponent
  ],
  imports: [
    CommonModule,
    AttendanceCalendarRoutingModule,
    FullCalendarModule
  ]
})
export class AttendanceCalendarModule { }
