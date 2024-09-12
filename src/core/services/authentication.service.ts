import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(payload: any): Observable<any> {
    return this.http.post(
      'https://sha256-1f39a1226a97.onrender.com/api/v1/auth/register',
      payload
    );
  }

  login(payload: any): Observable<any> {
    return this.http.post(
      'https://sha256-1f39a1226a97.onrender.com/api/v1/auth/login',
      payload
    );
  }
}
