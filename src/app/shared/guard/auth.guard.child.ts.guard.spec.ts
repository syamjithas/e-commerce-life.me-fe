import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authGuardChildTsGuard } from './auth.guard.child.ts.guard';

describe('authGuardChildTsGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuardChildTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
