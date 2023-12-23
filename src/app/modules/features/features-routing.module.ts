import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ATTENDANCE, DASHBOARD, DIRECTORY, DSR, ENTREPRENEURSHIP_PROGRAM, FRESHERS, MY_INTERVIEWS, MY_LINKS, PROFILE, PROJECT, REFER_CANDIDATE, REVIEWS, STARTUP, TRAININGS, USERS } from "src/app/constants/routes";
import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: "",
    component: FeaturesComponent,

    children: [
      { path: "", redirectTo: DASHBOARD.path, pathMatch: "full" },
      {
        path: DASHBOARD.path,
        loadChildren: () =>
          import("./modules/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: PROFILE.path,
        loadChildren: () =>
          import("./modules/my-profile/my-profile.module").then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: DIRECTORY.path,
        loadChildren: () =>
          import("./modules/directory/directory.module").then(
            (m) => m.DirectoryModule
          ),
      },
      {
        path:MY_LINKS.path,
        loadChildren:()=>import('./modules/my-links/my-links.module').then((m)=>m.MyLinksModule)
      },
      {
        path:ENTREPRENEURSHIP_PROGRAM.path,
        loadChildren:()=>import('./modules/entrepreneurship-program/entrepreneurship-program.module').then((m)=>m.EntrepreneurshipProgramModule)
      },
      {
        path:STARTUP.path,
        loadChildren:()=>import('./modules/startup/startup.module').then((m)=>m.StartupModule)
      },
      {
        path:REVIEWS.path,
        loadChildren:()=>import('./modules/reviews/reviews.module').then((m)=>m.ReviewsModule)
      },
      {
        path:REFER_CANDIDATE.path,
        loadChildren:()=>import('./modules/refer-a-friend/refer-a-friend.module').then((m)=>m.ReferAFriendModule)
      },
      {
        path:FRESHERS.path,
        loadChildren:()=>import('./modules/freshers/freshers.module').then((m)=>m.FreshersModule)
      },
      {
        path:TRAININGS.path,
        loadChildren:()=>import('./modules/trainings/trainings.module').then((m)=>m.TrainingsModule)
      },
      {path:MY_INTERVIEWS.path,
        loadChildren:()=>import ('./modules/my-interviews/my-interviews.module').then((m)=>m.MyInterviewsModule)
      },
      {
        path:USERS.path,
        loadChildren:()=>import('./modules/users/users.module').then((m)=>m.UsersModule)
      },
      {
        path:DSR.path,
        loadChildren:()=>import('./modules/dsr/dsr.module').then((m)=>m.DsrModule)
      },
      {
        path:PROJECT.path,
        loadChildren:()=>import('./modules/project/project.module').then((m)=>m.ProjectModule)
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
