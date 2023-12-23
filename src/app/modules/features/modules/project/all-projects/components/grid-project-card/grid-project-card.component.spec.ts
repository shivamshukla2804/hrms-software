import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProjectCardComponent } from './grid-project-card.component';

describe('GridProjectCardComponent', () => {
  let component: GridProjectCardComponent;
  let fixture: ComponentFixture<GridProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
