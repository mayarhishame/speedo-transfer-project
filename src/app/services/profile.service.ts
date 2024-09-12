import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private AcountapiUrl =
    'https://sha256-1f39a1226a97.onrender.com/api/v1/account/';
  private BalanceapiUrl =
    'https://sha256-1f39a1226a97.onrender.com/api/v1/account/balance/';
  private UserapiUrl =
    'https://sha256-1f39a1226a97.onrender.com/api/v1/customer/';
  private HistoryapiUrl =
    'https://sha256-1f39a1226a97.onrender.com/api/v1/transactions/history/';

  constructor(private http: HttpClient) {}

  private getToken(): string {
    console.log(localStorage.getItem('authToken'));
    return localStorage.getItem('authToken') || '';
  }

  private getUserId(): number {
    console.log(localStorage.getItem('userId'));
    return Number(localStorage.getItem('userId')) || 0;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
  }

  getAcountData(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.AcountapiUrl}${userId}`, { headers });
  }

  getBalance(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.BalanceapiUrl}${userId}`, { headers });
  }

  getUserData(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.UserapiUrl}${userId}`, { headers });
  }

  getHistoryData(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.HistoryapiUrl}${userId}`, { headers });
  }

  updateUserData(userData: any): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.UserapiUrl}${userId}`, userData, {
      headers,
    });
  }

  updatePassword(oldPassword: string, newPassword: string): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    return this.http.put<any>(`${this.UserapiUrl}${userId}/password`, body, {
      headers,
    });
  }
}
