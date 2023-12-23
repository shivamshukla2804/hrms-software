import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsrEditComponent } from './dsr-edit.component';

describe('DsrEditComponent', () => {
  let component: DsrEditComponent;
  let fixture: ComponentFixture<DsrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
