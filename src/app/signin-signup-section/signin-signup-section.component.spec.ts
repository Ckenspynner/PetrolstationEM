import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignupSectionComponent } from './signin-signup-section.component';

describe('SigninSignupSectionComponent', () => {
  let component: SigninSignupSectionComponent;
  let fixture: ComponentFixture<SigninSignupSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninSignupSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninSignupSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
