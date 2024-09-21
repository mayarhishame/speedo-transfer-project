import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../../app/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class SessionManagementService {
  private inactivityTimeout = 120000;
  private inactivityTimer: any;

  constructor(private router: Router, public dialog: MatDialog) {}

  resetInactivityTimer(): void {
    clearTimeout(this.inactivityTimer);

    this.inactivityTimer = setTimeout(() => {
      this.openLogin();
      alert(
        'We logged you out because you were inactive for 2 minutes - it’s to help keep your account secure'
      );
      localStorage.clear();
    }, this.inactivityTimeout);
  }

  startInactivityTimer(): void {
    document.addEventListener(
      'mousemove',
      this.resetInactivityTimer.bind(this)
    );
    document.addEventListener('keypress', this.resetInactivityTimer.bind(this));
    this.resetInactivityTimer();
  }
  openLogin(): void {
    this.dialog.open(LoginComponent, {
      width: '1440px',
    });
  }
}
