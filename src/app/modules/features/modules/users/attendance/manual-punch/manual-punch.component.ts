import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-manual-punch",
  templateUrl: "./manual-punch.component.html",
  styleUrls: ["./manual-punch.component.scss"],
})
export class ManualPunchComponent implements OnInit {
  empName = new FormControl("User Name");
  company = new FormControl("XYZ Technologies");
  punchRequest = new FormControl("08/01/2023");

  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "Edit", key: "edit", isSortable: "isSortable", type: "text" },
    {
      heading: "Manual Punch Date",
      key: "manual_punch_date",
      isSortable: "isSortable",
      type: "text",
    },
    {
      heading: "In Time",
      key: "in_time",
      isSortable: "isSortable",
      type: "text",
    },
    {
      heading: "On Time",
      key: "on_time",
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
