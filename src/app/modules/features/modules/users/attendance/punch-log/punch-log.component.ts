import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-punch-log",
  templateUrl: "./punch-log.component.html",
  styleUrls: ["./punch-log.component.scss"],
})
export class PunchLogComponent implements OnInit {
  empName = new FormControl("UserName");
  company = new FormControl("XYZ Technologies");
  punchRequest = new FormControl("08/01/2023");

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "Name", key: "name", isSortable: "isSortable", type: "text" },
    {
      heading: "Punch Time",
      key: "punch_time",
      isSortable: "isSortable",
      type: "text",
    },
    {
      heading: "Direction",
      key: "direction",
      isSortable: "isSortable",
      type: "text",
    },
  ];
  Table_DATA: any[] = [
    // { 's_no': '1', 'transaction_id': 5, 'amount_paid': '54', "date_time": 'APR 21,2020 00:39:14' },
  ];

  constructor(private notification: NotificationService) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
    this.empName.patchValue(this.notification.getUserName);
  }
}
