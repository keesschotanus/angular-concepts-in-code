import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveBasicComponent } from './form-reactive-basic.component';

describe('FormReactiveBasicComponent', () => {
  let component: FormReactiveBasicComponent;
  let fixture: ComponentFixture<FormReactiveBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
