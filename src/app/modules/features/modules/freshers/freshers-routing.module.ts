import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FRESHERS, MY_TRAININGS, TRAINING_DETAILS } from "src/app/constants/routes";
import { FreshersComponent } from "./freshers.component";

const routes: Routes = [
  {
    path: "",
    component: FreshersComponent,
    children: [
      { path: "", redirectTo: MY_TRAININGS.path, pathMatch: "full" },
    
      {
        path:MY_TRAININGS.path,
         loadChildren:()=>import('./my-trainings/my-trainings.module').then((m)=>m.MyTrainingsModule)
      },
      {
        path:`${TRAINING_DETAILS.path}/:trainingId`,
        loadChildren:()=>import('./training-details/training-details.module').then((m)=>m.TrainingDetailsModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreshersRoutingModule {}
