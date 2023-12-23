import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBonousProgramComponent } from './referral-bonous-program.component';

describe('ReferralBonousProgramComponent', () => {
  let component: ReferralBonousProgramComponent;
  let fixture: ComponentFixture<ReferralBonousProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralBonousProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralBonousProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
