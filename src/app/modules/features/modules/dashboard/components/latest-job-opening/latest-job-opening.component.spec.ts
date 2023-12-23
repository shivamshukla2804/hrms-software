import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestJobOpeningComponent } from './latest-job-opening.component';

describe('LatestJobOpeningComponent', () => {
  let component: LatestJobOpeningComponent;
  let fixture: ComponentFixture<LatestJobOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestJobOpeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestJobOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
