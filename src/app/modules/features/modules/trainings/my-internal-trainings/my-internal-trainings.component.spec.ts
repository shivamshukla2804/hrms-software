import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInternalTrainingsComponent } from './my-internal-trainings.component';

describe('MyInternalTrainingsComponent', () => {
  let component: MyInternalTrainingsComponent;
  let fixture: ComponentFixture<MyInternalTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInternalTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInternalTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
