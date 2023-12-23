import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDsrComponent } from './my-dsr.component';

const routes: Routes = [
  {
    path:'',
    component:MyDsrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDsrRoutingModule { }
