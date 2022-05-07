import { TestBed } from '@angular/core/testing';

import { EmployeeIdResolver } from './employee-id.resolver';

describe('EmployeeIdResolver', () => {
  let resolver: EmployeeIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmployeeIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
