import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedTrainingsComponent } from './requested-trainings.component';

describe('RequestedTrainingsComponent', () => {
  let component: RequestedTrainingsComponent;
  let fixture: ComponentFixture<RequestedTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
