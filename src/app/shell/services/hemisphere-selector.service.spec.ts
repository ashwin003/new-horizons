import { TestBed } from '@angular/core/testing';

import { HemisphereSelectorService } from './hemisphere-selector.service';

describe('HemisphereSelectorService', () => {
  let service: HemisphereSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HemisphereSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
