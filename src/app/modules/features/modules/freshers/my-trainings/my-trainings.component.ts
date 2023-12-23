import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FRESHERS_TRAININGS } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {
  trainingData=FRESHERS_TRAININGS;

  constructor(
    public dialog: MatDialog,
  // private _router:Router
  ) { }

  ngOnInit(): void {
  }

}
