import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-requested-trainings",
  templateUrl: "./requested-trainings.component.html",
  styleUrls: ["./requested-trainings.component.scss"],
})
export class RequestedTrainingsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "S.No", key: "s_no", isSortable: "", type: "text" },
    {
      heading: "Training Name",
      key: "training_name",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Timeline to conduct",
      key: "timeline_to_conduct",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Requested date",
      key: "requested_date",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "Status", key: "status", isSortable: "", type: "text" },
    { heading: "Action", key: "action", type: "action", action: [{}] },
  ];
  Table_DATA: any[] = [
    // { s_no: 1, training_name: 'Anusha',experience:'3 years', department: 'Angular', position: 'Sr. Software Engineer', date_of_referral: '22/01/2023',  candidate_status:'closed',"action": [ {icon:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/XYZ_Policy_Manual.pdf'}] },
    // { s_no: 2, candidate_name: 'Rajesh Kumar', experience:'5 + years',department: 'Node Js', position: 'Tech Lead', date_of_referral: '22/01/2023',  candidate_status:'open',"action": [ {icon:'download',link:'/assets/applogo.png'}] },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {}
}
