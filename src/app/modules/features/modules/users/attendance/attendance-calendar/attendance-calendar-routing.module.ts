import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceCalendarComponent } from './attendance-calendar.component';

const routes: Routes = [
  {
    path:'',
    component:AttendanceCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceCalendarRoutingModule { }
