import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-payments-history',
  standalone: true,
  imports: [
    SideNavComponent,
    HttpClientModule,
    CommonModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './payments-history.component.html',
  styleUrl: './payments-history.component.scss',
  providers: [ProfileService],
})
export class PaymentsHistoryComponent implements OnInit {
  transactions: any[] = []; // Updated to handle an array of transactions

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    const userId = 2;
    this.profileService.getHistoryData(userId).subscribe(
      (data) => {
        console.log('Data received:', data); // Log data to verify
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
