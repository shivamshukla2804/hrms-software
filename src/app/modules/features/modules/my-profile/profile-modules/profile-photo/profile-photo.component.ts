import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideInRight } from 'src/animations/slide-in-right';
import { PROFILE_PICTURE_VALUE } from 'src/app/constants/ui-texts/dashboard-card';
import { NotificationService } from 'src/app/services/notification-service/notification.service';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
  animations:[slideInRight]
})
export class ProfilePhotoComponent implements OnInit {
  uiMessage=PROFILE_PICTURE_VALUE
  imageSrc!: any;
  imgForm!:FormGroup;
  constructor(
    private notificationService: NotificationService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
  }
createForm(){
  this.imgForm= this.formBuilder.group({
    img:[null,Validators.required]
  })
}
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
}
remove(){
  this.imageSrc='';
  this.imgForm.reset();
}
save(){
  if(this.imgForm.valid){

    this.notificationService.showSuccess('Profile Image Saved','Profile Image');
  }
}
}
