import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  APPRAISAL,
  BASIC_INFORMATION,
  CHANGE_PASSWORD,
  PROFILE_PICTURE,
  QULIFICATION,
  SHIFT,
} from "src/app/constants/routes";
import { MyProfileComponent } from "./my-profile.component";

const routes: Routes = [
  {
    path: "",
    component: MyProfileComponent,
    children: [
      { path: "", redirectTo: BASIC_INFORMATION.path, pathMatch: "full" },
      {
        path: BASIC_INFORMATION.path,
        loadChildren: () =>
          import(
            "./profile-modules/basic-information/basic-information.module"
          ).then((m) => m.BasicInformationModule),
      },
      {
        path: PROFILE_PICTURE.path,
        loadChildren: () =>
          import("./profile-modules/profile-photo/profile-photo.module").then(
            (m) => m.ProfilePhotoModule
          ),
      },
      {
        path: QULIFICATION.path,
        loadChildren: () =>
          import("./profile-modules/qualification/qualification.module").then(
            (m) => m.QualificationModule
          ),
      },
      {
        path: SHIFT.path,
        loadChildren: () =>
          import("./profile-modules/shift/shift.module").then(
            (m) => m.ShiftModule
          ),
      },
      {
        path: CHANGE_PASSWORD.path,
        loadChildren: () =>
          import(
            "./profile-modules/change-password/change-password.module"
          ).then((m) => m.ChangePasswordModule),
      },
      {
        path: APPRAISAL.path,
        loadChildren: () =>
          import("./profile-modules/appraisal/appraisal.module").then(
            (m) => m.AppraisalModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule { }
