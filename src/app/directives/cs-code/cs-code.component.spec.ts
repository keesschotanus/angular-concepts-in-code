import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCodeComponent } from './cs-code.component';

describe('CsCodeComponent', () => {
  let component: CsCodeComponent;
  let fixture: ComponentFixture<CsCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
