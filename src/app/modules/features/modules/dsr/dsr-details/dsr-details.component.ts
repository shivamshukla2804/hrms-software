import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-dsr-details',
  templateUrl: './dsr-details.component.html',
  styleUrls: ['./dsr-details.component.scss']
})
export class DsrDetailsComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "Sr. No.", key: 's_no', isSortable: '', type: 'text', },
    { heading: "Project Name", key: 'project_name', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "D s r", key: 'dsr', isSortable: '', type: 'html', link: 'client-details' },
    { heading: "Status", key: 'status', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "P M Approval", key: 'pm_approval', isSortable: '', type: 'text', link: 'client-details' },
    { heading: "A M Approval", key: 'am_approval', isSortable: '', type: 'text', link: 'client-details' },
    { heading: 'R M Approval	', key: 'rm_approval', type: 'text', },
    { heading: 'Final Approval', key: 'final_approval', type: 'text', },
    { heading: 'Logged Hrs', key: 'logged_hr', type: 'text', },
    { heading: 'Action', key: 'action', type: 'action', action: [{}] },



  ]
  Table_DATA: any[] = [{
    s_no: 1, type: 'text', isSortable: 'sortable', action: [{ icon: 'edit', btnStyle: 'btn_add_new', btnText: 'pending', route: 'DSR_EDIT', type: 'route', routeID: 121 }], project_name: '	Trainee Project Angular', status: 'Submitted',
    pm_approval: 'N/A', am_approval: 'N/A', rm_approval: 'N/A',final_approve:'Pending',logged_hr:'8:00',
    dsr: "<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Meetings</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; NA&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Task&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; &nbsp;Bug fixing [2hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; &nbsp;Portal registration [1 hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp; Working on job openings module [ 3 hr]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Challenges</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">NA</p>"
  }
  ]
  constructor(private notificationService: NotificationService,) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  ngOnInit(): void {
  }

}
