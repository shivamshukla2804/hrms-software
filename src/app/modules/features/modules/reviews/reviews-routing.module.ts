import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MY_PERFORMANCE, REVIEWS } from "src/app/constants/routes";
import { ReviewsComponent } from "./reviews.component";

const routes: Routes = [
  {
    path: "",
    component: ReviewsComponent,
    children: [
      { path: "", redirectTo: MY_PERFORMANCE.path, pathMatch: "full" },
      {
        path: MY_PERFORMANCE.path,
        loadChildren: () =>import('./my-performance/my-performance.module').then((m)=>m.MyPerformanceModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
