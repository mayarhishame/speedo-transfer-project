import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionManagementService {
  private inactivityTimeout = 120000;
  private inactivityTimer: any;

  constructor(private router: Router) {}

  resetInactivityTimer(): void {
    clearTimeout(this.inactivityTimer);

    this.inactivityTimer = setTimeout(() => {
      alert(
        'We logged you out because you were inactive for 2 minutes - it’s to help keep your account secure'
      );
      this.router.navigate(['/auth']);
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
}
