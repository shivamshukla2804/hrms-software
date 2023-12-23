import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral-bonous-program',
  templateUrl: './referral-bonous-program.component.html',
  styleUrls: ['./referral-bonous-program.component.scss']
})
export class ReferralBonousProgramComponent implements OnInit {
@Input() referalData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
