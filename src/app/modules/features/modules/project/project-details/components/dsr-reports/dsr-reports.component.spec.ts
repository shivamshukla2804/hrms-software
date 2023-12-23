import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsrReportsComponent } from './dsr-reports.component';

describe('DsrReportsComponent', () => {
  let component: DsrReportsComponent;
  let fixture: ComponentFixture<DsrReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsrReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsrReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
