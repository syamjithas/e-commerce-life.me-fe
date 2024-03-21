import { HttpErrorResponse, HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = `${environment.base_url}/${environment.version}`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  post(url: string, request: any, headers: HttpHeaders = new HttpHeaders()): Observable<HttpResponse<any>> {
    const token = `Bearer ${this.authService.getAuthorizationToken}`;
    headers = headers.set('Authorization', token);
    return this.http
      .post<any>(this.buildUrl(url), request, { observe: 'response', headers })
      .pipe(retry(1), catchError(this.handleError));
  }

  download(url: string, request: any, headers: HttpHeaders = new HttpHeaders()): Observable<Blob> {
    const token = `Bearer ${this.authService.getAuthorizationToken}`;
    headers = headers.set('Authorization', token);
    return this.http
      .post<Blob>(this.buildUrl(url), request, { headers, responseType: 'blob' as 'json' })
      .pipe(catchError(this.handleError));
  }

  get(url: string, headers: HttpHeaders = new HttpHeaders()): Observable<HttpResponse<any>> {
    const token = `Bearer ${this.authService.getAuthorizationToken}`;
    headers = headers.set('Authorization', token);
    return this.http
      .get<any>(this.buildUrl(url), { observe: 'response', headers })
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.status === 401) {
      // Assuming '/login' is your login route
      this.router.navigate(['/login']);
    } else {
      console.error('An unexpected error occurred:', error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  };

  private buildUrl(url: string): string {
    return `${this.baseUrl}/${url}`;
  }
}
