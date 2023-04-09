import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRestClientComponent } from './http-rest-client.component';

describe('HttpRestClientComponent', () => {
  let component: HttpRestClientComponent;
  let fixture: ComponentFixture<HttpRestClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpRestClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRestClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
