/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropositionTrocComponent } from './proposition-troc.component';

describe('PropositionTrocComponent', () => {
  let component: PropositionTrocComponent;
  let fixture: ComponentFixture<PropositionTrocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionTrocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionTrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
