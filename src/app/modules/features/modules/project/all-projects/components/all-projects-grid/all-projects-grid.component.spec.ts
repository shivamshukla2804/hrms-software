import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectsGridComponent } from './all-projects-grid.component';

describe('AllProjectsGridComponent', () => {
  let component: AllProjectsGridComponent;
  let fixture: ComponentFixture<AllProjectsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProjectsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
