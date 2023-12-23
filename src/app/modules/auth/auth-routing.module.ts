import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FORGOT_PASSWORD, LOGIN } from "src/app/constants/routes";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "", redirectTo: LOGIN.path, pathMatch: "full" },
      {
        path: LOGIN.path,
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path:FORGOT_PASSWORD.path,
        loadChildren:()=>import('./forgot-password/forgot-password.module').then((m)=>m.ForgotPasswordModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
