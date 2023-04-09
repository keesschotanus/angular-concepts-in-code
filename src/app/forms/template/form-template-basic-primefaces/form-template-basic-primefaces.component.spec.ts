import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateBasicPrimefacesComponent } from './form-template-basic-primefaces.component';

describe('FormTemplateBasicPrimefacesComponent', () => {
  let component: FormTemplateBasicPrimefacesComponent;
  let fixture: ComponentFixture<FormTemplateBasicPrimefacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateBasicPrimefacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateBasicPrimefacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
