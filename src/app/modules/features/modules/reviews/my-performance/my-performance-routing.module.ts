import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPerformanceComponent } from './my-performance.component';

const routes: Routes = [
  {
    path:'',
    component:MyPerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPerformanceRoutingModule { }
