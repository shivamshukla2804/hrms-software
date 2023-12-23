import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {

  dataSourceForTable!: MatTableDataSource<any>;
  columns = [
    { heading: 'Date of Joining', key: 'doj', isSortable: 'isSortable', type: 'text', },
    { heading: 'Office Shift', key: 'office_shift', isSortable: 'isSortable', type: 'text', },
  ]
  Table_DATA: any[] = [
    { 'doj':'07/02/2022' ,'office_shift':'Morning' },
  ]

  constructor() {
    this.dataSourceForTable = new MatTableDataSource<any>(this.Table_DATA);
  }
  ngOnInit(): void {
    
  }

}
