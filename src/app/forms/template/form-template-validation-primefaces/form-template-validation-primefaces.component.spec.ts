import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateValidationPrimefacesComponent } from './form-template-validation-primefaces.component';

describe('FormTemplateValidationPrimefacesComponent', () => {
  let component: FormTemplateValidationPrimefacesComponent;
  let fixture: ComponentFixture<FormTemplateValidationPrimefacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateValidationPrimefacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateValidationPrimefacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
