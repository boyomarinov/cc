/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RektComponent } from './rekt.component';

describe('RektComponent', () => {
  let component: RektComponent;
  let fixture: ComponentFixture<RektComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RektComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
