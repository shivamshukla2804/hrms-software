import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './common-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { QialificationEditComponent } from './components/qialification-edit/qialification-edit.component';



@NgModule({
  declarations: [
    CommonTableComponent,
    QialificationEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    RouterModule,
    AbsoluteRoutingModule
  ],
  exports:[CommonTableComponent]
})
export class CommonTableModule { }
