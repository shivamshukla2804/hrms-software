import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-all-projects-grid",
  templateUrl: "./all-projects-grid.component.html",
  styleUrls: ["./all-projects-grid.component.scss"],
})
export class AllProjectsGridComponent implements OnInit {
  userName!: string;
  email!: string;
  constructor(private notification: NotificationService) {}

  ngOnInit(): void {
    this.userName = this.notification.getUserName;
    this.email = this.notification.getEmail;
  }
}
