import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPitchComponent } from './add-pitch.component';

const routes: Routes = [
  {
    path:'',
    component:AddPitchComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPitchRoutingModule { }
