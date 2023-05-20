import { TestBed } from '@angular/core/testing';

import { MactServiceTsService } from './mact-service.ts.service';

describe('MactServiceTsService', () => {
  let service: MactServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MactServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
