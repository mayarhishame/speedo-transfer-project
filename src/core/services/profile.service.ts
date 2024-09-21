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
  private TransactionApiUrl =
    'https://sha256-1f39a1226a97.onrender.com/api/v1/transactions/transfer';
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtQGdtYWlsLmNvbSIsImN1c3RvbWVySWQiOjYsImlhdCI6MTcyNjQ4ODE3NSwiZXhwIjoxNzI2NDg5OTc1fQ.Sl0hsLR6fP-1sDJ2VVs4nCRo97d9CZ0REn4LfWvSC5I';

  constructor(private http: HttpClient) {}

  // getUsersssData(userId: number): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`,
  //   });
  //   return this.http.get<any>(`${this.UserapiUrl}${userId}`, { headers });
  // }

  private getUserId(): number {
    if (typeof window !== 'undefined') {
      return Number(window.localStorage.getItem('id')) || 0;
    }
    return 0;
  }

  private getToken(): string {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('authToken') || '';
    }
    return '';
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  getAcountData(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.AcountapiUrl}${3}`, { headers });
  }

  getBalance(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.BalanceapiUrl}${userId}`, { headers });
  }

  getUserData(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.UserapiUrl}${3}`, { headers });
  }

  getHistoryData(): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.HistoryapiUrl}${3}`, { headers });
  }

  updateUserData(userData: any): Observable<any> {
    const userId = this.getUserId();
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.UserapiUrl}${3}`, userData, {
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
  saveTransaction(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.post<any>(this.TransactionApiUrl, payload, { headers });
  }
}
