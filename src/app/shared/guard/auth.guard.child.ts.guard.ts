import { CanActivateChildFn } from '@angular/router';

export const authGuardChildTsGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
