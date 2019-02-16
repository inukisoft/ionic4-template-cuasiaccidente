import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailPage } from './car-detail.page';

describe('CarDetailPage', () => {
  let component: CarDetailPage;
  let fixture: ComponentFixture<CarDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
