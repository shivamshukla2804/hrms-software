import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALL_PROJECT, PROJECT_DETAILS } from 'src/app/constants/routes';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '', component: ProjectComponent,
    children: [
      { path: '', redirectTo: ALL_PROJECT.path, pathMatch: 'full' },
      {
        path: ALL_PROJECT.path,
        loadChildren: () => import('./all-projects/all-projects.module').then((m) => m.AllProjectsModule)
      },
      {
        path: `${PROJECT_DETAILS.path}/:id`,
        loadChildren: () => import('./project-details/project-details.module').then((m) => m.ProjectDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
