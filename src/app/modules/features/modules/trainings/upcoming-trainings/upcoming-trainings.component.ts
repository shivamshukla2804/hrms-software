import { Component, OnInit } from '@angular/core';
import { FRESHERS_TRAININGS, TRAININGS } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-upcoming-trainings',
  templateUrl: './upcoming-trainings.component.html',
  styleUrls: ['./upcoming-trainings.component.scss']
})
export class UpcomingTrainingsComponent implements OnInit {
  trainingData=TRAININGS;

  constructor() { }

  ngOnInit(): void {
  }

}
