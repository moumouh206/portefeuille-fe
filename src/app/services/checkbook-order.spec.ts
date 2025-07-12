import { TestBed } from '@angular/core/testing';

import { CheckbookOrder } from './checkbook-order';

describe('CheckbookOrder', () => {
  let service: CheckbookOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckbookOrder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
