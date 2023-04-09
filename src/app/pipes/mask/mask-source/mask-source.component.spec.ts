import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskSourceComponent } from './mask-source.component';

describe('MaskSourceComponent', () => {
  let component: MaskSourceComponent;
  let fixture: ComponentFixture<MaskSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaskSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
