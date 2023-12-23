import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurshipProgramComponent } from './entrepreneurship-program.component';

describe('EntrepreneurshipProgramComponent', () => {
  let component: EntrepreneurshipProgramComponent;
  let fixture: ComponentFixture<EntrepreneurshipProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurshipProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurshipProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
