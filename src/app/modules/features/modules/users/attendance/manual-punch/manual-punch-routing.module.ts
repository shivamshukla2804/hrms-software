import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualPunchComponent } from './manual-punch.component';

const routes: Routes = [
  {
    path:'',
    component:ManualPunchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualPunchRoutingModule { }
