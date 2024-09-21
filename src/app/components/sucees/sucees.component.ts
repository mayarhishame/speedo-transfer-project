import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DownloadMobileAppComponent } from '../download-mobile-app/download-mobile-app.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sucees',
  standalone: true,
  imports: [NavbarComponent, DownloadMobileAppComponent, FooterComponent],
  templateUrl: './sucees.component.html',
  styleUrl: './sucees.component.scss',
})
export class SuceesComponent {
  amount: number = 0;
  recipientName: string = '';
  recipientAccount: string = '';

  constructor(private router: Router) {
    this.amount = parseFloat(localStorage.getItem('amount') || '0'); // Fallback to 0
    this.recipientName = localStorage.getItem('recipientName') || '';
    this.recipientAccount = localStorage.getItem('recipientAccount') || '';
  }

  completeTransfer() {
    alert('Transfer Successful!');
    this.router.navigate(['/home']);
  }

  back() {
    this.router.navigate(['/money-transfer-confirmation']);
  }
}
