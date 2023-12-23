import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoiningTrainingsComponent } from './ongoining-trainings.component';

describe('OngoiningTrainingsComponent', () => {
  let component: OngoiningTrainingsComponent;
  let fixture: ComponentFixture<OngoiningTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoiningTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoiningTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
