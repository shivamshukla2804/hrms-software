import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetRequestsComponent } from './asset-requests.component';

const routes: Routes = [
  {path:'',component:AssetRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRequestsRoutingModule { }
