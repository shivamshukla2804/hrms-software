import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchLogComponent } from './punch-log.component';

describe('PunchLogComponent', () => {
  let component: PunchLogComponent;
  let fixture: ComponentFixture<PunchLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunchLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
