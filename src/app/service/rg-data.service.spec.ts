import { TestBed } from '@angular/core/testing';

import { RGDataService } from './rg-data.service';

describe('RGDataService', () => {
  let service: RGDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RGDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
