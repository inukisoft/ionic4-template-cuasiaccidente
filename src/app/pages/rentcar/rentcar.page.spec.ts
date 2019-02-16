import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarPage } from './rentcar.page';

describe('RentcarPage', () => {
  let component: RentcarPage;
  let fixture: ComponentFixture<RentcarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentcarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
