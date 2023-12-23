import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.scss"],
  providers: [DatePipe],
})
export class TicketsComponent implements OnInit {
  toggle = false;
  leaveTypes: string[] = [
    "Planned Leave",
    "Privileged Leave",
    "Emergency Leave",
    "Short Leave",
    "All Reamaining Leave",
  ];
  ticketForm!: FormGroup;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "Action", key: "action", type: "action", action: [{}] },
    {
      heading: "Ticket Code",
      key: "ticket_code",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Priority",
      key: "priority",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Employee",
      key: "employee",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Subject",
      key: "subject",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Status",
      key: "status",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Date",
      key: "date",
      isSortable: "",
      type: "text",
      link: "client-details",
      class: "red",
    },
  ];
  Table_DATA: any[] = [
    {
      action: [
        {
          icon: "arrow_forward",
          route: "LEAVE_DETAILS",
          type: "route",
          routeID: 121,
        },
      ],
      ticket_code: "Short Leave",
      priority: "01/01/2022",
      employee: "01/01/2022",
      subject: "01/01/2022",
      status: "pending",
      date: "	Petter (AI057)",
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService,
    private datePipe: DatePipe
  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ticketForm = this.formBuilder.group({
      subject: this._formService.getControl("cv"),
      department: this._formService.getControl("cv"),
      ticket_category: this._formService.getControl("cv"),
      priority: this._formService.getControl("cv"),
      ticket_description: this._formService.getControl("address"),
    });
  }

  getControl(control: string): any {
    return this.ticketForm?.controls[control];
  }
  onSubmit() {
    if (this.ticketForm.valid) {
      this.ticketForm.value["status"] = "pending";
      this.ticketForm.value["date"] = this.datePipe.transform(
        new Date(),
        "yyyy-MM-dd"
      );
      this.ticketForm.value["ticket_code"] = "8762";
      this.ticketForm.value["employee"] = this.notificationService.getUserName;
      this.ticketForm.value["action"] = [
        {
          icon: "arrow_forward",
          route: "LEAVE_DETAILS",
          type: "route",
          routeID: 121,
        },
      ];

      this.Table_DATA.push(this.ticketForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

      this.notificationService.showSuccess("Ticket", "Added");
      console.log(this.ticketForm.value);
      this.toggle = false;
      this.ticketForm.reset();
    }
  }
}
