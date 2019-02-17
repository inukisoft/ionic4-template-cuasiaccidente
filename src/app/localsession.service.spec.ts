import { TestBed } from '@angular/core/testing';

import { LocalsessionService } from './localsession.service';

describe('LocalsessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalsessionService = TestBed.get(LocalsessionService);
    expect(service).toBeTruthy();
  });
});
