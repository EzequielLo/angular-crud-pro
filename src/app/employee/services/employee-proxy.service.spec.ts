import { TestBed } from '@angular/core/testing';

import { EmployeeProxyService } from './employee-proxy.service';

describe('EmployeeProxyService', () => {
  let service: EmployeeProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
