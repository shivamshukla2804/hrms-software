import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidyCalendarComponent } from './holidy-calendar.component';

describe('HolidyCalendarComponent', () => {
  let component: HolidyCalendarComponent;
  let fixture: ComponentFixture<HolidyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidyCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
