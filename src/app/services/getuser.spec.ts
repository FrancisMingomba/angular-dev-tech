import { TestBed } from '@angular/core/testing';

import { Getuser } from './getuser';

describe('Getuser', () => {
  let service: Getuser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getuser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
