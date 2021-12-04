import { TestBed } from '@angular/core/testing';

import { GiftingService } from './gifting.service';

describe('GiftingService', () => {
  let service: GiftingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
