import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInterviewsComponent } from './my-interviews.component';

const routes: Routes = [
  {
    path:'',
    component:MyInterviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInterviewsRoutingModule { }
