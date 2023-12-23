import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  plannedDeliveriesDataSource!: MatTableDataSource<any>;
  teamDetailColumnsDataSource!: MatTableDataSource<any>;
  tags1 = ["Designs", "Scope of work", "WireFrame", "RoadMap"];
  tags2 = ["Project Plan", "User stories", "project App Links", "Other"];

  plannedDeliveriesColumns = [
    { heading: "Milestones", key: "milestones", isSortable: "", type: "text" },
    {
      heading: "Release",
      key: "release",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Description",
      key: "description",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Into QA Date",
      key: "into_qa_date",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Internal Demo Date",
      key: "internal_demo_date",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Release Date",
      key: "release_date",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Delivery Status",
      key: "delivery_status",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "SignOff Status",
      key: "signOff_status",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
  ];
  teamDetailColumns = [
    {
      heading: "Name",
      key: "name",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Allocated As",
      key: "allocated_as",
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
    {
      heading: "Alloc Hrs",
      key: "alloc_hrs",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Exp",
      key: "exp",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Relevant Exp",
      key: "relevant_exp",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Hrs Log",
      key: "hrs_log",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
  ];
  Table_DATA: any[] = [];
  Table_DATA1: any[] = [
    {
      name: "User 1",
      allocated_as: "Tech Lead",
      department: "Angular",
      alloc_hrs: "0.00",
      exp: "11.0",
      relevant_exp: "0.3",
      hrs_log: "63:0",
    },
    {
      name: "User 2",
      allocated_as: "Tech Lead",
      department: "Angular",
      alloc_hrs: "0.00",
      exp: "11.0",
      relevant_exp: "0.3",
      hrs_log: "63:0",
    },
    {
      name: "User 3  ",
      allocated_as: "Tech Lead",
      department: "Angular",
      alloc_hrs: "0.00",
      exp: "11.0",
      relevant_exp: "0.3",
      hrs_log: "63:0",
    },
  ];
  constructor(private notificationService: NotificationService) {
    this.plannedDeliveriesDataSource = new MatTableDataSource<any>(
      this.Table_DATA
    );
    this.teamDetailColumnsDataSource = new MatTableDataSource<any>(
      this.Table_DATA1
    );
  }

  ngOnInit(): void {}
}
