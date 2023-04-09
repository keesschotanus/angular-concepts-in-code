import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputBindingParentComponent } from './input-output-binding-parent.component';

describe('InputOutputBindingParentComponent', () => {
  let component: InputOutputBindingParentComponent;
  let fixture: ComponentFixture<InputOutputBindingParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputBindingParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputBindingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
