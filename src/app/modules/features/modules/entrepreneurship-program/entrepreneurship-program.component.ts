import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STARTUP } from 'src/app/constants/routes';

@Component({
  selector: 'app-entrepreneurship-program',
  templateUrl: './entrepreneurship-program.component.html',
  styleUrls: ['./entrepreneurship-program.component.scss']
})
export class EntrepreneurshipProgramComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  toAddPitch(){
    this._router.navigate([STARTUP.fullUrl])
  }
}
