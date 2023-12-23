import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrDetailsComponent } from './dsr-details.component';

const routes: Routes = [
  {
    path:'',
    component:DsrDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrDetailsRoutingModule { }
