import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsHighlightComponent } from './cs-highlight.component';

describe('CsHighlightComponent', () => {
  let component: CsHighlightComponent;
  let fixture: ComponentFixture<CsHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
