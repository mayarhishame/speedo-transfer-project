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
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJ3YW5AZ21haWwuY29tIiwiY3VzdG9tZXJJZCI6MiwiaWF0IjoxNzI2MDg2MDc0LCJleHAiOjE3MjYwODc4NzR9.MNbkZ_9nuu1scaM2NiRPNbkUoYNTGgsrNRKLy7DQ8Qw';

  constructor(private http: HttpClient) {}

  getAcountData(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any>(`${this.AcountapiUrl}${userId}`, { headers });
  }
  getBalance(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any>(`${this.BalanceapiUrl}${userId}`, { headers });
  }
  getUserData(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any>(`${this.UserapiUrl}${userId}`, { headers });
  }
  getHistoryData(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any>(`${this.HistoryapiUrl}${userId}`, { headers });
  }
  updateUserData(userId: number, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.put<any>(`${this.UserapiUrl}${userId}`, userData, {
      headers,
    });
  }
  updatePassword(
    userId: number,
    oldPassword: string,
    newPassword: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    return this.http.put<any>(`${this.UserapiUrl}${userId}/password`, body, {
      headers,
    });
  }
}
