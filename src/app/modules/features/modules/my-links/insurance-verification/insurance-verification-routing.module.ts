import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceVerificationComponent } from './insurance-verification.component';

const routes: Routes = [
  {
    path:'',
    component:InsuranceVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceVerificationRoutingModule { }
