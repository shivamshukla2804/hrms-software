import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalFormComponent } from './referal-form.component';

describe('ReferalFormComponent', () => {
  let component: ReferalFormComponent;
  let fixture: ComponentFixture<ReferalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
