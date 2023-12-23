import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidyCalendarComponent } from './holidy-calendar.component';

const routes: Routes = [{
  path:'',
  component:HolidyCalendarComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayCalendarRoutingModule { }
