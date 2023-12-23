import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDsrComponent } from './my-dsr.component';

describe('MyDsrComponent', () => {
  let component: MyDsrComponent;
  let fixture: ComponentFixture<MyDsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
