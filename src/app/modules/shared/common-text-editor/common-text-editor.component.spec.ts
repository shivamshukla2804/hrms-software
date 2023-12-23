import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTextEditorComponent } from './common-text-editor.component';

describe('CommonTextEditorComponent', () => {
  let component: CommonTextEditorComponent;
  let fixture: ComponentFixture<CommonTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTextEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
