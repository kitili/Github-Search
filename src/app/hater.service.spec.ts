import { TestBed } from '@angular/core/testing';

import { HaterService } from './hater.service';

describe('HaterService', () => {
  let service: HaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
