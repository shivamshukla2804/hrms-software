import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FLOATING_LEAVE, LEAVE_DETAILS, MY_LEAVE } from 'src/app/constants/routes';
import { LeaveComponent } from './leave.component';

const routes: Routes = [
  {
    path: '', component: LeaveComponent,
    children: [
      {path:'',redirectTo:MY_LEAVE.path,pathMatch:'full'},
      {
        path: MY_LEAVE.path,
        loadChildren: () => import('./my-leave/my-leave.module').then((m) => m.MyLeaveModule)
      },
      {
        path: FLOATING_LEAVE.path,
        loadChildren: () => import('./floating-leave/floating-leave.module').then((m) => m.FloatingLeaveModule)
      },
      {
        path:`${LEAVE_DETAILS.path}/:id`,
        loadChildren:()=>import('./leave-details/leave-details.module').then((m)=>m.LeaveDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
