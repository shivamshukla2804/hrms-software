import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leave-details",
  templateUrl: "./leave-details.component.html",
  styleUrls: ["./leave-details.component.scss"],
})
export class LeaveDetailsComponent implements OnInit {
  heading = [
    { heading: "Leave Type", key: "leave_type" },
    { heading: "Start Date", key: "start_date" },
    { heading: "End Date", key: "end_date" },
    { heading: "Applied On", key: "applied_on" },
    { heading: "Leave Duration", key: "leave_duration" },
    { heading: "Uploaded Document	", key: "uploaded_document" },
  ];
  Table_DATA:any =   {leave_type:'Short Leave',start_date:'01/01/2022',end_date:'01/01/2022',applied_on:'01/01/2022',leave_duration:'5:00 PM - 7:00 PM',uploaded_document:'HR (Human Resourse)'}
   
  constructor() {}

  ngOnInit(): void {}
}
