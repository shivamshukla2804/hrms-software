import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalTrainingDetailsComponent } from './internal-training-details.component';

const routes: Routes = [
  {
    path:'',
    component:InternalTrainingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalTrainingDetailsRoutingModule { }
