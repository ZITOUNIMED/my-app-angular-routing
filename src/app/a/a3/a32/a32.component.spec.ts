import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A32Component } from './a32.component';

describe('A32Component', () => {
  let component: A32Component;
  let fixture: ComponentFixture<A32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
