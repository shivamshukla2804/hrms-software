import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-referral-list",
  templateUrl: "./referral-list.component.html",
  styleUrls: ["./referral-list.component.scss"],
})
export class ReferralListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "S.No", key: "s_no", isSortable: "", type: "text" },
    {
      heading: "Candidate Name",
      key: "candidate_name",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Experience",
      key: "experience",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Department",
      key: "department",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "Position", key: "position", isSortable: "", type: "text" },
    {
      heading: "Date Of Referral",
      key: "date_of_referral",
      isSortable: "",
      type: "text",
    },
    {
      heading: "Candidate Status",
      key: "candidate_status",
      isSortable: "",
      type: "text",
    },
    { heading: "Resume/CV", key: "action", type: "action", action: [{}] },
  ];
  Table_DATA: any[] = [
    {
      s_no: 1,
      candidate_name: "Anusha",
      experience: "3 years",
      department: "Angular",
      position: "Sr. Software Engineer",
      date_of_referral: "22/01/2023",
      candidate_status: "closed",
      action: [
        {
          icon: "download",
          link: "https://dashboard.com/admin/repository/file-download?file=uploads/hr/policy/XYZ_Policy_Manual.pdf",
        },
      ],
    },
    {
      s_no: 2,
      candidate_name: "Rajesh Kumar",
      experience: "5 + years",
      department: "Node Js",
      position: "Tech Lead",
      date_of_referral: "22/01/2023",
      candidate_status: "open",
      action: [{ icon: "download", link: "/assets/applogo.png" }],
    },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {}
}
