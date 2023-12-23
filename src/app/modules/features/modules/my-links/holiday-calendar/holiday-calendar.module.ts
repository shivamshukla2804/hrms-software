import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayCalendarRoutingModule } from './holiday-calendar-routing.module';
import { HolidyCalendarComponent } from './holidy-calendar.component';


@NgModule({
  declarations: [
    HolidyCalendarComponent
  ],
  imports: [
    CommonModule,
    HolidayCalendarRoutingModule
  ]
})
export class HolidayCalendarModule { }
