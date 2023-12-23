import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-asset-requests",
  templateUrl: "./asset-requests.component.html",
  styleUrls: ["./asset-requests.component.scss"],
  providers: [DatePipe],
})
export class AssetRequestsComponent implements OnInit {
  assetCategory = ["Laptop", "Mobile", "Desktop"];
  quantity = ["1", "2", "3", "4", "5"];
  priority = ["Low", "Medium", "High"];
  allocationType = ["Permanent", "Temporary"];
  formToggle = false;
  assetRequestForm!: FormGroup;

  dataSource!: MatTableDataSource<any>;

  columns = [
    { heading: "S.No", key: "s_no", isSortable: "", type: "text" },
    {
      heading: "Status",
      key: "status",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Request Reason",
      key: "request_reason",
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
      heading: "Request At",
      key: "request_at",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Asset Category",
      key: "asset_category",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Allocation Type",
      key: "allocation_type",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "Company", key: "company", isSortable: "", type: "text" },
  ];
  Table_DATA: any[] = [
    {
      s_no: 1,
      status: "under process",
      request_reason: "work need",
      priority: "high",
      request_at: "01/01/2022",
      asset_category: "Laptop",
      company: "XYZ Technology",
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
    this.assetRequestForm = this.formBuilder.group({
      asset_category: this._formService.getControl("cv"),
      quantity: this._formService.getControl("cv"),
      priority: this._formService.getControl("cv"),
      require_date: this._formService.getControl("cv"),
      allocation_type: this._formService.getControl("cv"),
      request_reason: this._formService.getControl("address"),
    });
  }

  getControl(control: string): any {
    return this.assetRequestForm?.controls[control];
  }
  onSubmit() {
    if (this.assetRequestForm.valid) {
      this.assetRequestForm.value["s_no"] = this.Table_DATA.length;
      this.assetRequestForm.value["status"] = "pending";
      this.assetRequestForm.value["request_at"] = this.datePipe.transform(
        new Date(),
        "yyyy-MM-dd"
      );
      this.assetRequestForm.value["company"] = "Apple";
      this.Table_DATA.push(this.assetRequestForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.assetRequestForm.reset();
      this.formToggle = false;
      this.notificationService.showSuccess("Asset Request", "Saved");
    }
  }
}
