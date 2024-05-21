/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lab4Component } from './Lab4.component';

describe('Lab4Component', () => {
  let component: Lab4Component;
  let fixture: ComponentFixture<Lab4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
