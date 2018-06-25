import { SignupFormComponent } from './signupform.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './signupform/signupform.component';

describe('FaqComponent', () => {
  let component: SignUpFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.SignUpFormComponentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(SignupFormComponent).toBeTruthy();
  });
});