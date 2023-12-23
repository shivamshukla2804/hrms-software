import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-my-dsr",
  templateUrl: "./my-dsr.component.html",
  styleUrls: ["./my-dsr.component.scss"],
  providers: [DatePipe],
})
export class MyDsrComponent implements OnInit {
  toggle = false;
  leaveTypes: string[] = [
    "Planned Leave",
    "Privileged Leave",
    "Emergency Leave",
    "Short Leave",
    "All Reamaining Leave",
  ];
  dsrForm!: FormGroup;
  filterForm!: FormGroup;
  noWork = false;
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "Sr.No.", key: "s_no", isSortable: "", type: "text" },
    {
      heading: "Emp Name",
      key: "emp_name",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Email",
      key: "email",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Employment Type",
      key: "employment_type",
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
    },
    {
      heading: "Total(Logged Hr)",
      key: "logged_hr",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "Final Approval", key: "action", type: "action", action: [{}] },
  ];
  Table_DATA: any[] = [
    {
      s_no: 1,
      type: "text",
      isSortable: "sortable",
      action: [
        {
          icon: "",
          btnStyle: "btn_add_new",
          btnText: "pending",
          route: "DSR_DETAILS",
          type: "route",
          routeID: 121,
        },
      ],
      emp_name: "Short Leave",
      email: "01/01/2022",
      employment_type: "01/01/2022",
      date: "01/01/2022",
      logged_hr: "pending",
      level_1: "	Petter (AI057)",
      level_2: "HR (Human Resourse)",
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
    this.dsrForm = this.formBuilder.group({
      project: this._formService.getControl("cv"),
      date: this._formService.getControl("cv"),
      logged_hr: this._formService.getControl("cv"),
      // no_work_done: this._formService.getControl('chkbox',),
      description: this._formService.getControl("dsr"),
    });

    this.filterForm = this.formBuilder.group({
      start_date: this._formService.getControl("cv", false),
      end_date: this._formService.getControl("cv", false),
      submission_status: this._formService.getControl("cv", false),
      project: this._formService.getControl("cv"),
      final_approve: this._formService.getControl("cv", false),
      hours: this._formService.getControl("cv", false),
    });
  }
  onSelect() {
    this.noWork = !this.noWork;
    if (this.noWork) {
      this.getControl("logged_hr").setValue(0);
      this.getControl("description").setValue(" No Work Done Today");
      this.getControl("logged_hr").disabled;
    } else {
      this.getControl("logged_hr").reset();
      this.getControl("description").reset();
    }
  }

  getControl(control: string): FormControl {
    return this.dsrForm?.controls[control] as FormControl;
  }
  getFilterControl(control: string): FormControl {
    return this.filterForm?.controls[control] as FormControl;
  }
  onFilter() {
    console.log(this.filterForm);
  }
  onSubmit() {
    console.log(this.dsrForm);

    if (this.dsrForm.valid) {
      this.dsrForm.value["s_no"] = this.Table_DATA.length + 1;
      this.dsrForm.value["date"] = this.datePipe.transform(
        this.getControl("date").value,
        "yyyy-MM-dd"
      );
      this.dsrForm.value["employment_type"] = "permanent";
      this.dsrForm.value["emp_name"] = this.notificationService.getUserName;
      this.dsrForm.value["email"] = this.notificationService.getEmail;
      this.dsrForm.value["action"] = [
        {
          icon: "arrow_forward",
          route: "LEAVE_DETAILS",
          type: "route",
          routeID: 121,
        },
      ];
      this.Table_DATA.push(this.dsrForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      console.log(this.dataSource);

      this.notificationService.showSuccess("DSR", "Added");
      this.toggle = false;
      this.dsrForm.reset();
      this.noWork = false;
    }
  }
}
