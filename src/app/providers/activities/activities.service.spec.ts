import { TestBed, inject } from '@angular/core/testing';

import { ActivitiesService } from './activities.service';

describe('ActivitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivitiesService]
    });
  });

  it('should be created', inject([ActivitiesService], (service: ActivitiesService) => {
    expect(service).toBeTruthy();
  }));
});
