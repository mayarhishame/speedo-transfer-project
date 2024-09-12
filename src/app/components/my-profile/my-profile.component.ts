import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [
    SideNavComponent,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
  providers: [ProfileService],
})
export class MyProfileComponent {
  userData: any = {
    email: '',
    name: '',
    accountNumber: 0,
    balance: 0,
    country: '',
    amount: '',
  };

  constructor(private ProfileService: ProfileService) {}

  ngOnInit(): void {
    const userId = 2;
    this.ProfileService.getAcountData(userId).subscribe(
      (data) => {
        this.userData.accountNumber = data.accountNumber;
        this.userData.balance = data.balance;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
    this.ProfileService.getUserData(userId).subscribe(
      (data) => {
        this.userData.email = data.email;
        this.userData.name = data.name;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
