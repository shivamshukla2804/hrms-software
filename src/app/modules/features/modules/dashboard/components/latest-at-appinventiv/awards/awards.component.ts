import { Component, OnInit } from '@angular/core';
import { AWARDS_EMP_IMAGE_DATA, AWARD_LAYOUT, IAWARDDATA } from '../../../interfaces/interfaces';
// import { AWARDS_EMP_IMAGE_DATA, AWARD_LAYOUT, IAWARDDATA } from '../../interfaces/interfaces';

@Component({
  selector: 'app-awards',
  templateUrl:'./awards.component.html' ,
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  data:IAWARDDATA[]=AWARDS_EMP_IMAGE_DATA;
  layoutData=AWARD_LAYOUT

  constructor() { }

  ngOnInit(): void {
  }

}
