import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';


// TODO : je ne sais pas si vous utiliser les tests, si non, je vous invite à les dégager du projet

describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
