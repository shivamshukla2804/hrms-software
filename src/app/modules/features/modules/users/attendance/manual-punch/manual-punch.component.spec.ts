import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPunchComponent } from './manual-punch.component';

describe('ManualPunchComponent', () => {
  let component: ManualPunchComponent;
  let fixture: ComponentFixture<ManualPunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualPunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
