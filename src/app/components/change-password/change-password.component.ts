import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    SideNavComponent,
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss',
  providers: [ProfileService],
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  userId: number = 2; // Use the correct user ID dynamically

  constructor(private profileService: ProfileService) {}

  updatePassword() {
    this.profileService
      .updatePassword(this.currentPassword, this.newPassword)
      .subscribe(
        (response) => {
          console.log('Password updated successfully', response);
        },
        (error) => {
          console.error('Error updating password', error);
        }
      );
  }
}
