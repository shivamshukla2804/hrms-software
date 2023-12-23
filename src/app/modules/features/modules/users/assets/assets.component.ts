import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-assets",
  templateUrl: "./assets.component.html",
  styleUrls: ["./assets.component.scss"],
})
export class AssetsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  columns = [
    {
      heading: "Asset Name",
      key: "asset_name",
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
      heading: "Company Asset Code",
      key: "company_asset_code",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "Brand", key: "brand", isSortable: "", type: "text" },
    { heading: "Serial No.", key: "serial_no", isSortable: "", type: "text" },
    { heading: "Model", key: "model", isSortable: "", type: "text" },
    { heading: "Is Working", key: "is_working", isSortable: "", type: "text" },
    { heading: "Company", key: "company", isSortable: "", type: "text" },
  ];
  Table_DATA: any[] = [
    {
      asset_name: "LAPTOP",
      asset_category: "Laptop",
      company_asset_code: "A&M11",
      brand: "HP",
      serial_no: "-",
      model: "G5",
      is_working: "Yes",
      company: "XYZ Technology",
    },
    // { s_no: 1, training_name: 'Anusha',experience:'3 years', department: 'Angular', position: 'Sr. Software Engineer', date_of_referral: '22/01/2023',  candidate_status:'closed',"action": [ {icon:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/XYZ_Policy_Manual.pdf'}] },
    // { s_no: 2, candidate_name: 'Rajesh Kumar', experience:'5 + years',department: 'Node Js', position: 'Tech Lead', date_of_referral: '22/01/2023',  candidate_status:'open',"action": [ {icon:'download',link:'/assets/applogo.png'}] },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {}
}
