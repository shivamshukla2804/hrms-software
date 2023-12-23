import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Topic", key: 'topic', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Date", key: 'date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Attendance", key: 'attendance', isSortable: '', type: 'text', link: 'client-details' },
  ]
  Table_DATA: any[] = [
    { s_no: 1, topic: 'What are s ',  date: '22/01/2023',  attendance:'Present'},
    { s_no: 2, topic: 'What t an	 ',  date: '22/01/2023',  attendance:'present'},
    { s_no: 3, topic: 'Usingroute. (ActivatedRoute)	 ',  date: '22/01/2023',  attendance:'absent'},
    { s_no: 4, topic: 'What dules	 ',  date: '22/01/2023',  attendance:'present'},
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}
