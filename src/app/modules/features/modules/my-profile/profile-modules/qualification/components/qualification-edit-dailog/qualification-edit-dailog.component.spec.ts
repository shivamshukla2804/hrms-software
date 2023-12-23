import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationEditDailogComponent } from './qualification-edit-dailog.component';

describe('QualificationEditDailogComponent', () => {
  let component: QualificationEditDailogComponent;
  let fixture: ComponentFixture<QualificationEditDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationEditDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationEditDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
