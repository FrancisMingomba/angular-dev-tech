import { TestBed } from '@angular/core/testing';

import { LoginSevice } from './login-sevice';

describe('LoginSevice', () => {
  let service: LoginSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
