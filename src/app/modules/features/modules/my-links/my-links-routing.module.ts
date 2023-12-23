import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOLIDAY_CALENDAR, INSURANCE_VERIFICATION, POLICY_DOCUMENTS } from 'src/app/constants/routes';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {
    path: '',
    component: MyLinksComponent,
    
    children: [
      { path: '', redirectTo: POLICY_DOCUMENTS.path, pathMatch: 'full' },
      { path: POLICY_DOCUMENTS.path, loadChildren: () => import('././policy-documents/policy-documents.module').then((m)=>m.PolicyDocumentsModule) },
      { path: INSURANCE_VERIFICATION.path, loadChildren: () => import('./insurance-verification/insurance-verification.module').then((m) => m.InsuranceVerificationModule) },
      { path: HOLIDAY_CALENDAR.path, loadChildren: () => import('./holiday-calendar/holiday-calendar-routing.module').then((m) => m.HolidayCalendarRoutingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLinksRoutingModule { }
