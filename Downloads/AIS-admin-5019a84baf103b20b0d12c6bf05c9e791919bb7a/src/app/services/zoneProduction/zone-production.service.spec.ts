import { TestBed } from '@angular/core/testing';

import { ZoneProductionService } from './zone-production.service';

describe('ZoneProductionService', () => {
  let service: ZoneProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
