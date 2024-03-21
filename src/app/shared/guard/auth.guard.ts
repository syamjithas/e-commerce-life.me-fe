import { CanActivateFn, Router } from '@angular/router';

function isLoggedIn(): boolean {
  return !!localStorage.getItem('userToken');
}

export const authGuard: CanActivateFn = (route: any, state: any) => {
  console.log(route, state);
  if (isLoggedIn()) {
    return true;
  } else {
    return false;
  }
};
