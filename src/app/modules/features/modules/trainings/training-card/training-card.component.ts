import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FRESHER_TRAINING_ITEM } from 'src/app/interfaces/common.interface';
import { CancelEnrollmentDialogComponent } from '../cancel-enrollment-dialog/cancel-enrollment-dialog.component';
import { TrainingDialogComponent } from '../training-dialog/training-dialog.component';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {
  @Input() data!:FRESHER_TRAINING_ITEM;
  constructor(
public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }
  submitHandeler(data:any){
    if(!data.attendees){

      this.dialog.open(TrainingDialogComponent,{
      })
    }else{
      this.dialog.open(CancelEnrollmentDialogComponent,{
      })
    }
  }
}
