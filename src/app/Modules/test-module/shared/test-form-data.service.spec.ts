import { TestBed } from '@angular/core/testing';

import { TestFormDataService } from './test-form-data.service';

describe('TestFormDataService', () => {
  let service: TestFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
