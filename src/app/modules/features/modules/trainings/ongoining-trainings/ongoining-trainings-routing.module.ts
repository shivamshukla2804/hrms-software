import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoiningTrainingsComponent } from './ongoining-trainings.component';

const routes: Routes = [
  {
    path:'',
    component:OngoiningTrainingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoiningTrainingsRoutingModule { }
