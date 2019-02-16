import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListPage } from './cars-list.page';

describe('CarsListPage', () => {
  let component: CarsListPage;
  let fixture: ComponentFixture<CarsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
