import { TestBed } from '@angular/core/testing';

import { IsSaveGuard } from './is-save.guard';

describe('IsSaveGuard', () => {
  let guard: IsSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
