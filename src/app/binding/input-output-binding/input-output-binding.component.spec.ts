import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputBindingComponent } from './input-output-binding.component';

describe('InputOutputBindingComponent', () => {
  let component: InputOutputBindingComponent;
  let fixture: ComponentFixture<InputOutputBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
