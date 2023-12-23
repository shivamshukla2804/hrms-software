import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreciationDialogComponent } from './appreciation-dialog.component';

describe('AppreciationDialogComponent', () => {
  let component: AppreciationDialogComponent;
  let fixture: ComponentFixture<AppreciationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppreciationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppreciationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
