import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFileInputComponent } from './common-file-input.component';

describe('CommonFileInputComponent', () => {
  let component: CommonFileInputComponent;
  let fixture: ComponentFixture<CommonFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
