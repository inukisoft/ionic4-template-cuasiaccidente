import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWeatherPage } from './local-weather.page';

describe('LocalWeatherPage', () => {
  let component: LocalWeatherPage;
  let fixture: ComponentFixture<LocalWeatherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalWeatherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
