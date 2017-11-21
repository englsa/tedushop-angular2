import { TestBed, inject } from '@angular/core/testing';

import { UltilityService } from './ultility.service';

describe('UltilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UltilityService]
    });
  });

  it('should be created', inject([UltilityService], (service: UltilityService) => {
    expect(service).toBeTruthy();
  }));
});
