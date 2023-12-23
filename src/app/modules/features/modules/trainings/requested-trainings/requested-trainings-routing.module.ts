import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestedTrainingsComponent } from './requested-trainings.component';

const routes: Routes = [
  {
    path:'',
    component:RequestedTrainingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestedTrainingsRoutingModule { }
