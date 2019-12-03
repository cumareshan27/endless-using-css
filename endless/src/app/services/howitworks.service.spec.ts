import { TestBed } from '@angular/core/testing';

import { HowitworksService } from './howitworks.service';

describe('HowitworksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HowitworksService = TestBed.get(HowitworksService);
    expect(service).toBeTruthy();
  });
});
