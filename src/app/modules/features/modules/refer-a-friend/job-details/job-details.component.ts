import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOpening, JobOpeningList } from '../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  jobId: number = 0;
  job!: JobOpening;
  jobOpenings: JobOpening[] = JobOpeningList;
  desc:string[] =[
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',
     'Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts',

  ]
  data:string[]=[
    'Education: Graduate/Post Graduate',
    'Skills : Blockchain, ethereium, javaScript',
    'Abilities: To Write Clean &amp; reusable code'
  ]
  constructor(private _actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobId = this._actRoute.snapshot.params.jobId;
    this.jobOpenings.forEach((job) => {
      if (job.jobId == this.jobId) {
        this.job = job;
        return;
      }
    });
    console.log(this.job);

  }

}
