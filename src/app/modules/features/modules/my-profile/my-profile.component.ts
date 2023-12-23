import { Component, OnInit } from "@angular/core";
import { ProfilePart, PROFILE_PARTS } from "../dashboard/interfaces/interfaces";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent implements OnInit {
  profileParts: ProfilePart[] = PROFILE_PARTS;
  userName!: string;
  constructor(private notification: NotificationService) {}

  ngOnInit(): void {
    this.userName = this.notification.getUserName;
  }
}
