import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VALIDATION_MESSAGES } from 'src/app/constants/messages';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.scss']
})
export class CommonDropdownComponent implements OnInit,AfterViewInit {
  @Input() set dropdownDownControlName(data:FormControl | AbstractControl){
    this.inputFormControl = data;    
  }
   inputFormControl!:FormControl | AbstractControl;
  @Input() label!: string;
  @Input() data:any;
  @Input() errorType:any;
  @Input() formfieldCSS:any;
  @Input() labelStyle:any;
  myControl = new FormControl(null);
  filteredOptions!: Observable<string[]>;
  
  constructor() {  
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl?.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        return res;
      })
    );
  }
  ngAfterViewInit(): void {
    
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.data.filter((option:any) => {
      const res = option?.toLowerCase().includes(filterValue);

      return res;
    });
  }
}



