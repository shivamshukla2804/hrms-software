import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ATTENDANCE_CALENDAR, MANUAL_PUNCH, PUNCH_LOG } from "src/app/constants/routes";
import { AttendanceCalendarModule } from "./attendance-calendar/attendance-calendar.module";
import { AttendanceComponent } from "./attendance.component";

const routes: Routes = [
  {
    path: '',
    component: AttendanceComponent,
    children: [
      { path: '', redirectTo: ATTENDANCE_CALENDAR.path, pathMatch: 'full' },
      { path: ATTENDANCE_CALENDAR.path, loadChildren: () => import('./attendance-calendar/attendance-calendar.module').then((m) => AttendanceCalendarModule) },
      { path: MANUAL_PUNCH.path, loadChildren: () => import('./manual-punch/manual-punch.module').then((m) => m.ManualPunchModule) },
      {path:PUNCH_LOG.path,loadChildren:()=>import('./punch-log/punch-log.module').then((m)=>m.PunchLogModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule { }
