import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLeaveComponent } from './floating-leave.component';

describe('FloatingLeaveComponent', () => {
  let component: FloatingLeaveComponent;
  let fixture: ComponentFixture<FloatingLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
