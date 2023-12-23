import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TRAININGS } from 'src/app/interfaces/common.interface';
import { RequestTrainingDialogComponent } from '../request-training-dialog/request-training-dialog.component';

@Component({
  selector: 'app-my-internal-trainings',
  templateUrl: './my-internal-trainings.component.html',
  styleUrls: ['./my-internal-trainings.component.scss']
})
export class MyInternalTrainingsComponent implements OnInit {
  trainingData=TRAININGS;

  constructor(
public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }
  requestTraining(){
    this.dialog.open(RequestTrainingDialogComponent,{
      
    })
  }
}
