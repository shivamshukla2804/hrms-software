import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { LoginWithCredentialComponent } from './login-with-credential/login-with-credential.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginWithGoogleComponent,
    LoginWithCredentialComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    ValidationErrorModule
  ]
})
export class LoginModule { }
