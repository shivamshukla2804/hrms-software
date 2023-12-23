import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntrepreneurshipProgramComponent } from "./entrepreneurship-program.component";

const routes: Routes = [
  {
    path: "",
    component: EntrepreneurshipProgramComponent,
    // children:[
    //   // {path:'',redirectTo:}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepreneurshipProgramRoutingModule {}
