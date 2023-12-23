import { Component, OnInit } from '@angular/core';
import { JobOpening, JobOpeningList } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss']
})
export class JobOpeningsComponent implements OnInit {

  jobOpenings:JobOpening[]=JobOpeningList;

  constructor() { }

  ngOnInit(): void {
  }

}
