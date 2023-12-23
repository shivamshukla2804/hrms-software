import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTrainingDetailsComponent } from './internal-training-details.component';

describe('InternalTrainingDetailsComponent', () => {
  let component: InternalTrainingDetailsComponent;
  let fixture: ComponentFixture<InternalTrainingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTrainingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
