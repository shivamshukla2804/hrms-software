import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTrainingDialogComponent } from './request-training-dialog.component';

describe('RequestTrainingDialogComponent', () => {
  let component: RequestTrainingDialogComponent;
  let fixture: ComponentFixture<RequestTrainingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTrainingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTrainingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
