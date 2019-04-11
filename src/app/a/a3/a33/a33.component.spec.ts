import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A33Component } from './a33.component';

describe('A33Component', () => {
  let component: A33Component;
  let fixture: ComponentFixture<A33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
