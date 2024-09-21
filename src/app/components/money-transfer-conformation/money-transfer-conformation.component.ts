import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { DownloadMobileAppComponent } from '../download-mobile-app/download-mobile-app.component';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-money-transfer-conformation',
  standalone: true,
  imports: [
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    DownloadMobileAppComponent,
  ],
  templateUrl: './money-transfer-conformation.component.html',
  styleUrl: './money-transfer-conformation.component.scss',
  providers: [ProfileService],
})
export class MoneyTransferConformationComponent {
  amount: number;
  recipientName: string;
  recipientAccount: string;

  constructor(private router: Router, private profileService: ProfileService) {
    this.amount = parseFloat(localStorage.getItem('amount') || '0');
    this.recipientName = localStorage.getItem('recipientName') || '';
    this.recipientAccount = localStorage.getItem('recipientAccount') || '';
  }

  confirm() {
    this.completeTransfer();
  }

  completeTransfer() {
    const transactionData = {
      toAccountNumber: this.recipientAccount,
      amount: this.amount,
      recipientName: this.recipientName,
    };

    this.profileService.saveTransaction(transactionData).subscribe(
      (response) => {
        // alert('Transfer Successful! Transaction saved.');
        console.log(typeof transactionData.amount);
        console.log(typeof transactionData.recipientName);
        console.log(typeof transactionData.toAccountNumber);
        console.log(transactionData);
        this.router.navigate(['/sucees']);
      },
      (error) => {
        console.error('Error saving transaction:', error);
        // alert(
        //   'Transfer successful, but there was an error saving the transaction.'
        // );
        console.log(typeof transactionData.amount);
        console.log(typeof transactionData.recipientName);
        console.log(typeof transactionData.toAccountNumber);
        console.log(transactionData);
        this.router.navigate(['/sucees']);
      }
    );
  }

  back() {
    this.router.navigate(['/money-transfer']);
  }
}
