import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-policy-documents",
  templateUrl: "./policy-documents.component.html",
  styleUrls: ["./policy-documents.component.scss"],
})
export class PolicyDocumentsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  columns = [
    { heading: "#", key: "s_no", isSortable: "", type: "text" },
    {
      heading: "Name",
      key: "name",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    {
      heading: "Type",
      key: "doc_type",
      isSortable: "",
      type: "text",
      link: "client-details",
    },
    { heading: "File Size", key: "doc_size", isSortable: "", type: "text" },
    {
      heading: "Last Modified",
      key: "last_modification",
      isSortable: "",
      type: "text",
    },
    { heading: "Action", key: "action", type: "action", action: [{}] },
  ];
  Table_DATA: any[] = [
    {
      s_no: 1,
      name: " XYZ_Policy_Manual",
      doc_type: "pdf",
      doc_size: "22kb",
      last_modification: "22/01/2023",
      action: [
        {
          icon: "download",
          text: "download",
          type: "download",
          link: "https://www.buds.com.ua/images/Lorem_ipsum.pdf",
        },
      ],
    },
    {
      s_no: 2,
      name: " Contact_List_Updated_XYZ",
      doc_type: "jpeg",
      doc_size: "31kb",
      last_modification: "22/01/2023",
      action: [
        {
          icon: "download",
          text: "download",
          type: "download",
          link: "/assets/applogo.png",
        },
      ],
    },
    {
      s_no: 3,
      name: "Employee Referral Policy",
      doc_type: "pdf",
      doc_size: "20kb",
      last_modification: "22/01/2023",
      action: [
        {
          icon: "download",
          text: "download",
          type: "download",
          link: "/assets/bday1.jpeg",
        },
      ],
    },
    {
      s_no: 4,
      name: "Holiday-Calendar-2023",
      doc_type: "png",
      doc_size: "20kb",
      last_modification: "22/01/2023",
      action: [
        {
          icon: "download",
          text: "download",
          type: "download",
          link: "/assets/bday4.jpeg",
        },
      ],
    },
    {
      s_no: 5,
      name: "LeavePolicy",
      doc_type: "pdf",
      doc_size: "31kb",
      last_modification: "22/01/2023",
      action: [
        {
          icon: "download",
          text: "download",
          type: "download",
          link: "/assets/user1.jpeg",
        },
      ],
    },
  ];

  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  ngOnInit(): void {}
}
