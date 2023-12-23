import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReferralListComponent } from "./referral-list.component";

const routes: Routes = [
  {
    path: "",
    component: ReferralListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralListRoutingModule {}
