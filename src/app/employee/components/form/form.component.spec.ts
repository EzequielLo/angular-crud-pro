import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [FormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be fields firstName, lastName and emailId', () => {
    expect(component.formEmployee.contains('firstName')).toBeTruthy();
    expect(component.formEmployee.contains('lastName')).toBeTruthy();
    expect(component.formEmployee.contains('emailId')).toBeTruthy();
  });

  it('should required firstName', () => {
    const firstName = component.formEmployee.get('firstName')!;
    firstName.setValue('');
    expect(firstName.valid).toBeFalsy();
  });

  it('should required lastName', () => {
    const lastName = component.formEmployee.get('lastName')!;
    lastName.setValue('');
    expect(lastName.valid).toBeFalsy();
  });

  it('should required emailId', () => {
    const emailId = component.formEmployee.get('emailId')!;
    emailId.setValue('');
    expect(emailId.valid).toBeFalsy();
  });

});
