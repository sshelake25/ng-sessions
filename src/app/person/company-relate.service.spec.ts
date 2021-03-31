import { TestBed } from '@angular/core/testing';

import { CompanyRelateService } from './company-relate.service';

describe('CompanyRelateService', () => {
  let service: CompanyRelateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRelateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
