import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectsComponent } from './on-going-projects.component';

describe('OnGoingProjectsComponent', () => {
  let component: OnGoingProjectsComponent;
  let fixture: ComponentFixture<OnGoingProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
