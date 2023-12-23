import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PunchLogComponent } from './punch-log.component';
// import { PunchLogComponent } from '../manual-punch/punch-log.component';

const routes: Routes = [
  {
    path:'',
    component:PunchLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PunchLogRoutingModule { }
