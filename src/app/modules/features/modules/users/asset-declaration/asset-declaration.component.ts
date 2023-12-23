import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-asset-declaration",
  templateUrl: "./asset-declaration.component.html",
  styleUrls: ["./asset-declaration.component.scss"],
})
export class AssetDeclarationComponent implements OnInit {
  assetCategory = ["Laptop", "Mobile", "Desktop"];
  quantity = ["1", "2", "3", "4", "5"];
  priority = ["Low", "Medium", "High"];
  allocationType = ["Permanent", "Temporary"];
  formToggle = false;
  assetDeclarationForm!: FormGroup;

  dataSource!: MatTableDataSource<any>;

  columns = [
    { heading: "S.No", key: "s_no", isSortable: "", type: "text" },
    {
      heading: "Employee Id",
      key: "emp_id",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Unique Asset Code",
      key: "unique_asset_code",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Serial Number",
      key: "serial_no",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Model Number",
      key: "model_no",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "OS",
      key: "os",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "OS Version",
      key: "os_version",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Brand",
      key: "brand",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Colour",
      key: "colour",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Images",
      key: "asset_image",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Is Working ?",
      key: "device_working_condition",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "Added", key: "added", isSortable: "", type: "text" },
  ];
  Table_DATA: any[] = [
    // {s_no:1,status:'under process',request_reason:'work need',priority:'high',request_at:'01/01/2022',asset_category:'Laptop',company:'XYZ Technology'}
  ];
  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService
  ) {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.assetDeclarationForm = this.formBuilder.group({
      emp_id: this._formService.getControl("cv"),
      unique_asset_code: this._formService.getControl("cv"),
      serial_no: this._formService.getControl("cv"),
      model_no: this._formService.getControl("cv"),
      os: this._formService.getControl("cv"),
      os_version: this._formService.getControl("cv"),
      brand: this._formService.getControl("cv"),
      colour: this._formService.getControl("cv"),
      device_working_condition: this._formService.getControl("cv"),
      asset_image: this._formService.getControl("cv"),
    });
  }

  getControl(control: string): any {
    return this.assetDeclarationForm?.controls[control];
  }
  onSubmit() {
    console.log(this.assetDeclarationForm.value);
    if (this.assetDeclarationForm.valid) {
      this.assetDeclarationForm.value["s_no"] = this.Table_DATA.length;
      this.assetDeclarationForm.value["added"] = "yes";
      this.Table_DATA.push(this.assetDeclarationForm.value);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.assetDeclarationForm.reset();
      this.formToggle = false;
      this.notificationService.showSuccess("Asset Declaration", "Saved");
    }
  }
}
