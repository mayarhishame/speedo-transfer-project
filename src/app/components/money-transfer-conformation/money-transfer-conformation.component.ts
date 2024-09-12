import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-money-transfer-conformation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './money-transfer-conformation.component.html',
  styleUrl: './money-transfer-conformation.component.scss',
  providers: [ProfileService],
})
export class MoneyTransferConformationComponent {
  transferData: any;
  userData: any;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Retrieve transfer data from localStorage
    const data = localStorage.getItem('transferData');
    this.transferData = data ? JSON.parse(data) : {};

    // Assume the userId is stored in localStorage after login
    const userId = 6;

    // Fetch the user's data from the backend
    if (userId) {
      this.profileService.getUserData(Number(userId)).subscribe(
        (response) => {
          this.userData = response; // Store user data (like name, account number)
        },
        (error) => {
          console.error('Failed to fetch user data', error);
        }
      );
    }
  }

  onConfirm() {
    this.profileService.transferMoney(this.transferData).subscribe(
      (response) => {
        this.router.navigate(['/money-transfer-success']);
      },
      (error) => {
        console.error('Transfer failed', error);
      }
    );
  }

  onBack() {
    this.router.navigate(['/money-transfer-amount']);
  }
}
