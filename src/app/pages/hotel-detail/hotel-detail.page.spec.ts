import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailPage } from './hotel-detail.page';

describe('HotelDetailPage', () => {
  let component: HotelDetailPage;
  let fixture: ComponentFixture<HotelDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
