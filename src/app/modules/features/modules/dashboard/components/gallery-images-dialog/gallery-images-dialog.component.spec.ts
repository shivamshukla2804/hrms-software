import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImagesDialogComponent } from './gallery-images-dialog.component';

describe('GalleryImagesDialogComponent', () => {
  let component: GalleryImagesDialogComponent;
  let fixture: ComponentFixture<GalleryImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryImagesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
