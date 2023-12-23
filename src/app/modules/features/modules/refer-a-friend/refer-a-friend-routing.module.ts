import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JOB_DETAILS, JOB_OPENINGS, REFERRAL_LIST } from "src/app/constants/routes";
import { JOB_OPENING } from "src/app/constants/ui-texts/dashboard-card";
import { ReferAFriendComponent } from "./refer-a-friend.component";

const routes: Routes = [
  {
    path: "",
    component: ReferAFriendComponent,
    children: [
      {path:'',redirectTo:JOB_OPENINGS.path,pathMatch:'full'},
      {
        path: JOB_OPENINGS.path,
        loadChildren: () =>
          import("./job-openings/job-openings.module").then(
            (m) => m.JobOpeningsModule
          ),
      },
      {
        path: REFERRAL_LIST.path,
        loadChildren: () =>
          import("./referral-list/referral-list.module").then(
            (m) => m.ReferralListModule
          ),
      },
      {
        path:`${JOB_DETAILS.path}/:jobId`,
        loadChildren:()=>import("./job-details/job-details.module").then((m)=>m.JobDetailsModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferAFriendRoutingModule {}
