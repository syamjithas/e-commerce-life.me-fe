import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.base_url}/${environment.version}`;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) { }

  get getGoogleUser(): any {
    return this.localStorage.getJSON('user') || '';
  }

  get getAuthorizationToken(): string {
    return this.localStorage.get('authorization') || '';
  }

  registerGoogleUser(user: any): void {
    this.localStorage.setJSON('user', user);
  }

  registerAuthToken(token: string): void {
    this.localStorage.set('authorization', token);
  }

  logout(): void {
    this.localStorage.remove('authorization');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.localStorage.get('authorization');
  }

  isAdmin(): boolean {
    // Assuming admin status is determined by a specific flag in the stored user object
    const user = this.localStorage.getJSON('user');
    return user && user.isAdmin;
  }

  refreshToken(): void {
    const url = `${this.baseUrl}/refresh-token`; // Assuming '/refresh-token' is the endpoint for token refresh
    this.http.get(url).pipe(
      catchError(this.handleError)
    ).subscribe({
      next: (response: any) => {
        // Assuming the response includes a new token
        this.registerAuthToken(response.newToken);
      },
      error: (error) => {
        console.error("Failed to refresh token", error);
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    // Customize error handling based on your project's needs
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
