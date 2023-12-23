import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectDetailsRoutingModule } from "./project-details-routing.module";
import { ProjectDetailsComponent } from "./project-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { OverviewComponent } from "./components/overview/overview.component";
import { NotesComponent } from "./components/notes/notes.component";
import { DsrReportsComponent } from "./components/dsr-reports/dsr-reports.component";
import { CommonTableModule } from "src/app/modules/shared/common-table/common-table.module";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
// import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';

import { CommonInputModule } from "src/app/modules/shared/common-input/common-input.module";
import { CommonDropdownModule } from "src/app/modules/shared/common-dropdown/common-dropdown.module";

import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddTagDialogComponent } from './components/add-tag-dialog/add-tag-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    ProjectDetailsComponent,
    OverviewComponent,
    NotesComponent,
    DsrReportsComponent,
    AddTagDialogComponent,
  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    MatTabsModule,
    CommonTableModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    CommonInputModule,
    CommonDropdownModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // MatChipsModule
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class ProjectDetailsModule {}
