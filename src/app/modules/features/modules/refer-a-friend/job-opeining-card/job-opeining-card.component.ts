import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JOB_DETAILS } from 'src/app/constants/routes';
import { ReferalFormComponent } from '../referal-form/referal-form.component';

@Component({
  selector: 'app-job-opeining-card',
  templateUrl: './job-opeining-card.component.html',
  styleUrls: ['./job-opeining-card.component.scss']
})
export class JobOpeiningCardComponent implements OnInit {

  @Input() job:any;
  constructor( public dialog: MatDialog,
    private _router:Router
    ) { }


  ngOnInit(): void {
    
  }
  openJobReferalForm(data:any){
    this.dialog.open(ReferalFormComponent, {
      data:data,
    });
  }
  viewDetails(){
    this._router.navigate([JOB_DETAILS.fullUrl]);
  }
}
