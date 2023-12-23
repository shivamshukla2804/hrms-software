import { Component, OnInit } from '@angular/core';
import { FEEDBACK_LABELS } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-internal-training-details',
  templateUrl: './internal-training-details.component.html',
  styleUrls: ['./internal-training-details.component.scss']
})
export class InternalTrainingDetailsComponent implements OnInit {
  LABELS=FEEDBACK_LABELS;

  constructor() { }

  ngOnInit(): void {
  }

}
