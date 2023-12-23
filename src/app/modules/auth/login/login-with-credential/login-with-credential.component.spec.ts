import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithCredentialComponent } from './login-with-credential.component';

describe('LoginWithCredentialComponent', () => {
  let component: LoginWithCredentialComponent;
  let fixture: ComponentFixture<LoginWithCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
