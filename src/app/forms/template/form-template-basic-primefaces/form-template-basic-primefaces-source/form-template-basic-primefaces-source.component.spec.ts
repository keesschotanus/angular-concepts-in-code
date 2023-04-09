import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateBasicPrimefacesSourceComponent } from './form-template-basic-primefaces-source.component';

describe('FormTemplateBasicPrimefacesSourceComponent', () => {
  let component: FormTemplateBasicPrimefacesSourceComponent;
  let fixture: ComponentFixture<FormTemplateBasicPrimefacesSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateBasicPrimefacesSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateBasicPrimefacesSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
