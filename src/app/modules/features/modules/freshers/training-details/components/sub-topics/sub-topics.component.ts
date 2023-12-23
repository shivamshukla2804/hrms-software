import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FEEDBACK_LABELS } from '../../../../dashboard/interfaces/interfaces';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {

  // LABELS=FEEDBACK_LABELS;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'S.No.', key: 's_no', isSortable: '', type: 'text', },
    { heading: "Sub Topic", key: 'sub_topic', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Topic Trainer", key: 'topic_trainer', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Trainer Email", key: 'trainer_email', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Start Date", key: 'start_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "End Date", key: 'end_date', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'Resource Url', key: 'resource_url', type: 'text', action: [{}] },
  ]
  Table_DATA: any[] = [
    { s_no: 1, sub_topic: 'What are modules. How to create modules. How to break application in modules ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
    { s_no: 2, sub_topic: 'What comprise of modules? (Export, import, provider etc..) What is input and output,viewchild,viewchildren,contentchild,contentchildren	 ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
    { s_no: 3, sub_topic: 'Using routerLink Parameterized routing How to get parameters passed in route. (ActivatedRoute)	 ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
    { s_no: 4, sub_topic: 'What are modules. How to create modules. How to break application in modules	 ', topic_trainer: 'Sandeep ', trainer_email: 'sandeep@gmail.com', start_date: '22/01/2023', end_date:'22/01/2023', resource_url:'-'},
  ]

  constructor() { 
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}
