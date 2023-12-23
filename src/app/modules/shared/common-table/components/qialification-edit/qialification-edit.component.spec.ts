import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QialificationEditComponent } from './qialification-edit.component';

describe('QialificationEditComponent', () => {
  let component: QialificationEditComponent;
  let fixture: ComponentFixture<QialificationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QialificationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QialificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
