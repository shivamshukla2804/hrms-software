import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ReferralBonousProgramComponent } from "./components/referral-bonous-program/referral-bonous-program.component";
import { LatestJobOpeningComponent } from "./components/latest-job-opening/latest-job-opening.component";
import { NewFamilyMemberComponent } from "./components/new-family-member/new-family-member.component";
import { MatButtonModule } from "@angular/material/button";
import { CarouselModule } from "src/app/modules/shared/carousel/carousel.module";
import { MatIconModule } from "@angular/material/icon";
import { WorkAnniversaryComponent } from "./components/latest-at-appinventiv/work-anniversary/work-anniversary.component";
import { CommonCardComponent } from "./components/latest-at-appinventiv/common-card/common-card.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { BirthdayCelebrationComponent } from "./components/latest-at-appinventiv/birthday-celebration/birthday-celebration.component";
import { AwardsComponent } from "./components/latest-at-appinventiv/awards/awards.component";
import { AppreciationComponent } from "./components/latest-at-appinventiv/appreciation/appreciation.component";
import { GalleryImagesDialogComponent } from "./components/gallery-images-dialog/gallery-images-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { NguCarouselModule } from "@ngu/carousel";
import { ReferalFormComponent } from "../refer-a-friend/referal-form/referal-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { ValidationErrorModule } from "src/app/pipes/validation-error/validation-error.module";
import { DigitOnlyModule } from "src/app/directives/digit-only/digit-only.module";
import { AppreciationDialogComponent } from './components/latest-at-appinventiv/appreciation-dialog/appreciation-dialog.component';
import { JobOpeiningCardModule } from "../refer-a-friend/job-opeining-card/job-opeining-card.module";
import { CommonInputModule } from "src/app/modules/shared/common-input/common-input.module";
import { CommonTextAreaModule } from "src/app/modules/shared/common-text-area/common-text-area.module";
import { CommonFileInputModule } from "src/app/modules/shared/common-file-input/common-file-input.module";

const MATERIAL = [
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
];
@NgModule({
  declarations: [
    DashboardComponent,
    ReferralBonousProgramComponent,
    LatestJobOpeningComponent,
    NewFamilyMemberComponent,
    AppreciationComponent,
    AwardsComponent,
    BirthdayCelebrationComponent,
    GalleryComponent,
    CommonCardComponent,
    WorkAnniversaryComponent,
    GalleryImagesDialogComponent,
    ReferalFormComponent,
    AppreciationDialogComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule,
    NguCarouselModule,
    FormsModule,
    DigitOnlyModule,
    ReactiveFormsModule,
    ValidationErrorModule,
    JobOpeiningCardModule,
    CommonInputModule,
    CommonTextAreaModule,
    CommonFileInputModule,

    ...MATERIAL,
  ],
})
export class DashboardModule {}
