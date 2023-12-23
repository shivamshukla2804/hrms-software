import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyInternalTrainingsComponent } from "./my-internal-trainings.component";

const routes: Routes = [{ path: "", component: MyInternalTrainingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyInternalTrainingsRoutingModule {}
