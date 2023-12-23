import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FEEDBACK_LABELS } from '../../../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  LABELS=FEEDBACK_LABELS;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Topic", key: 'topic', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Topic Trainer", key: 'topic_trainer', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Trainer Email", key: 'trainer_email', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Start Date", key: 'start_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "End Date", key: 'end_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Resource Url', key: 'resource_url', type: 'text', action: [{}] },
  ]
  Table_DATA: any[] = [
    { s_no: 1, topic: 'Angular ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
    { s_no: 2, topic: 'Angular ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
    { s_no: 3, topic: 'Angular ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
    { s_no: 4, topic: 'Angular ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }


  ngOnInit(): void {
  }

}
