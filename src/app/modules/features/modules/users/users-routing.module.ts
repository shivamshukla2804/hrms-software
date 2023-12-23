import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ASSETS_DECLARATION, ATTENDANCE, LEAVE, MY_ASSET_INVENTORY, REQUEST_ASSETS, TICKETS } from "src/app/constants/routes";
import { UsersComponent } from "./users.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      { path: '', redirectTo: MY_ASSET_INVENTORY.path, pathMatch: 'full' },
      {
        path: MY_ASSET_INVENTORY.path,
        loadChildren: () =>
          import("./assets/assets.module").then((m) => m.AssetsModule),
      },
      {
        path: REQUEST_ASSETS.path, loadChildren: () => import('./asset-requests/asset-requests.module').then((m) => m.AssetRequestsModule)
      },
      {
        path: ASSETS_DECLARATION.path, loadChildren: () => import('./asset-declaration/asset-declaration.module').then((m) => m.AssetDeclarationModule)
      },
      {
        path: ATTENDANCE.path,
        loadChildren: () => import('./attendance/attendance.module').then((m) => m.AttendanceModule)
      },
      {
        path: LEAVE.path,
        loadChildren: () => import('./leave/leave.module').then((m) => m.LeaveModule)
      },{
        path:TICKETS.path,
        loadChildren:()=>import('./tickets/tickets.module').then((m)=>m.TicketsModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
