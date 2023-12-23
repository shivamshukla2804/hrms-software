import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-projects-list',
  templateUrl: './all-projects-list.component.html',
  styleUrls: ['./all-projects-list.component.scss']
})
export class AllProjectsListComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: 'Project Name', key: 'action', type: 'action', action: [{}] },
    { heading: "Billing Type	Resources", key: 'billing_type_resource', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "	Hrs.", key: 'hrs', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Total Milestone", key: 'total_milestone', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Delivered", key: 'delivered', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "Pending", key: 'pending', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "% Complete", key: 'compete_status', isSortable: '', type: 'text', link: 'client-details' },
  ]
  Table_DATA: any[] = [{
     action: [{ icon: '', btnStyle:'link', btnText:'Trainee Project Angular',route: 'PROJECT_DETAILS', type: 'route', routeID: 121 }],
     billing_type_resource: '3', hrs: '34232', total_milestone: '01',
     delivered: '1', pending: '01', compete_status: '	66 %',
  }
  ]
  constructor(  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}
