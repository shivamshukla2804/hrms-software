import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloatingLeaveComponent } from './floating-leave.component';

const routes: Routes = [
  {path:'',component:FloatingLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingLeaveRoutingModule { }
