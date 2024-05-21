/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab3Component } from './Lab3.component';

describe('Lab3Component', () => {
  let component: Lab3Component;
  let fixture: ComponentFixture<Lab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
