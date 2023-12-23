import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProjectsRoutingModule } from './all-projects-routing.module';
import { AllProjectsComponent } from './all-projects.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { HoldProjectsComponent } from './components/hold-projects/hold-projects.component';
import { OnGoingProjectsComponent } from './components/on-going-projects/on-going-projects.component';
import { AllProjectsGridComponent } from './components/all-projects-grid/all-projects-grid.component';
import { AllProjectsListComponent } from './components/all-projects-list/all-projects-list.component';
import { CommonTableModule } from 'src/app/modules/shared/common-table/common-table.module';
import { GridProjectCardComponent } from './components/grid-project-card/grid-project-card.component';


@NgModule({
  declarations: [
    AllProjectsComponent,
    HoldProjectsComponent,
    OnGoingProjectsComponent,
    AllProjectsGridComponent,
    AllProjectsListComponent,
    GridProjectCardComponent,
  ],
  imports: [
    CommonModule,
    AllProjectsRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    CommonTableModule
  ]
})
export class AllProjectsModule { }
