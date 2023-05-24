import { TestBed } from '@angular/core/testing';

import { UserlogoService } from './userlogo.service';

describe('UserlogoService', () => {
  let service: UserlogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
