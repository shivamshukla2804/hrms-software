import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeiningCardComponent } from './job-opeining-card.component';

describe('JobOpeiningCardComponent', () => {
  let component: JobOpeiningCardComponent;
  let fixture: ComponentFixture<JobOpeiningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOpeiningCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpeiningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
