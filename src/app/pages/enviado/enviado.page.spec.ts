import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviadoPage } from './enviado.page';

describe('EnviadoPage', () => {
  let component: EnviadoPage;
  let fixture: ComponentFixture<EnviadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
