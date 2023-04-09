import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateValidationComponent } from './form-template-validation.component';

describe('FormTemplateValidationComponent', () => {
  let component: FormTemplateValidationComponent;
  let fixture: ComponentFixture<FormTemplateValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
