import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ADD_PITCH } from "src/app/constants/routes";
import { StartupComponent } from "./startup.component";

const routes: Routes = [
  {
    path: "",
    component: StartupComponent,
    children: [
      {path:'',redirectTo:ADD_PITCH.path,pathMatch:'full'},
      {
        path: ADD_PITCH.path,
        loadChildren: () =>
          import("./add-pitch/add-pitch.module").then((m) => m.AddPitchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupRoutingModule {}
