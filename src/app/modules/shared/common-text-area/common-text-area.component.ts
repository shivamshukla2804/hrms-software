import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-text-area',
  templateUrl: './common-text-area.component.html',
  styleUrls: ['./common-text-area.component.scss']
})
export class CommonTextAreaComponent implements OnInit {
  @Input() inputFormControl!:FormControl ;
  @Input() label!: string;
  @Input() data:any;
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  @Input() labelStyle:any;
  @Input() column:number=7;
  @Input() row:number=4;
  @Input() maxLength:number=200;

  constructor() { }

  ngOnInit(): void {
  }

}
