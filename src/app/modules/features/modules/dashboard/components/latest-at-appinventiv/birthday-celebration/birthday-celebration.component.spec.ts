import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayCelebrationComponent } from './birthday-celebration.component';

describe('BirthdayCelebrationComponent', () => {
  let component: BirthdayCelebrationComponent;
  let fixture: ComponentFixture<BirthdayCelebrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayCelebrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayCelebrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
