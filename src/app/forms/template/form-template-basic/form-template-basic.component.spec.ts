import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateBasicComponent } from './form-template-basic.component';

describe('FormTemplateBasicComponent', () => {
  let component: FormTemplateBasicComponent;
  let fixture: ComponentFixture<FormTemplateBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTemplateBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
