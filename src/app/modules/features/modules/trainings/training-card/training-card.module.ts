import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from './training-card.component';
import { AbsoluteRoutingModule } from "../../../../../pipes/absolute-routing/absolute-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        TrainingCardComponent
    ],
    exports: [TrainingCardComponent],
    imports: [
        CommonModule,
        AbsoluteRoutingModule,
        AbsoluteRoutingModule,
        RouterModule
    ]
})
export class TrainingCardModule { }
