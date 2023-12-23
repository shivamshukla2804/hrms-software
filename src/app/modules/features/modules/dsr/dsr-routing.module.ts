import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DSR_DETAILS, DSR_EDIT, MY_DSR } from "src/app/constants/routes";
import { DrsComponent } from "./drs.component";

const routes: Routes = [
  {
    path: "",
    component: DrsComponent,
    children: [
      { path: "", redirectTo: MY_DSR.path, pathMatch: "full" },
      {
        path: MY_DSR.path,
        loadChildren: () =>
          import("./my-dsr/my-dsr.module").then((m) => m.MyDsrModule),
      },
      {
        path: `${DSR_DETAILS.path}/:id`,
        loadChildren: () =>
          import("./dsr-details/dsr-details.module").then((m) => m.DsrDetailsModule),
      },
      {
        path: `${DSR_EDIT.path}/:id`,
        loadChildren: () =>
          import("./dsr-edit/dsr-edit.module").then((m) => m.DsrEditModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsrRoutingModule {}
