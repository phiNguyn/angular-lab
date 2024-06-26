/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab1Component } from './Lab1.component';

describe('Lab1Component', () => {
  let component: Lab1Component;
  let fixture: ComponentFixture<Lab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
