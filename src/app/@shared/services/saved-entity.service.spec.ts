import { TestBed } from '@angular/core/testing';

import { SavedEntityService } from './saved-entity.service';

describe('SavedEntityService', () => {
  let service: SavedEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
