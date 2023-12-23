import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePhotoRoutingModule } from './profile-photo-routing.module';
import { ProfilePhotoComponent } from './profile-photo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilePhotoComponent
  ],
  imports: [
    CommonModule,
    ProfilePhotoRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfilePhotoModule { }
