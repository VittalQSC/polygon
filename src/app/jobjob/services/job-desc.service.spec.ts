import { TestBed } from '@angular/core/testing';

import { JobDescService } from './job-desc.service';

describe('JobDescService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobDescService = TestBed.get(JobDescService);
    expect(service).toBeTruthy();
  });
});
