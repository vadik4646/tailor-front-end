/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThingListComponent } from './thing-list.component';

describe('ThingListComponent', () => {
  let component: ThingListComponent;
  let fixture: ComponentFixture<ThingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
