import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDeclarationComponent } from './asset-declaration.component';

describe('AssetDeclarationComponent', () => {
  let component: AssetDeclarationComponent;
  let fixture: ComponentFixture<AssetDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
