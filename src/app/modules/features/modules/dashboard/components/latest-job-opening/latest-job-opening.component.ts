import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';
import { JOB_OPENINGS } from 'src/app/constants/routes';
import { ReferalFormComponent } from '../../../refer-a-friend/referal-form/referal-form.component';
import { JobOpening, JobOpeningList } from '../../interfaces/interfaces';

@Component({
  selector: 'app-latest-job-opening',
  templateUrl: './latest-job-opening.component.html',
  styleUrls: ['./latest-job-opening.component.scss']
})
export class LatestJobOpeningComponent implements OnInit,AfterViewInit {

  jobOpenings:JobOpening[]=JobOpeningList;
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  dataSource:any=[];
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  constructor(private _router:Router) { }

  ngOnInit(): void {
  
  }
  ngAfterViewInit(){
    this.listToShow.forEach(item=>{
      this.dataSource.push(item);
    })
  }
  toViewAll(){  
    this._router.navigate([JOB_OPENINGS.fullUrl])
  }
  // openJobReferalForm(data:any){
  //   this.dialog.open(ReferalFormComponent, {
  //     data:data,
  //   });
  // }

}
