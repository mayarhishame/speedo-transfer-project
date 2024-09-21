import { Component } from '@angular/core';

import { SideNavComponent } from '../side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    SideNavComponent,
    FormsModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  providers: [ProfileService],
})
export class SettingsComponent {
  name: string = '';
  country: string = '';
  email: string = '';
  userId: number = 2;

  constructor(private profileService: ProfileService) {}

  updateProfile() {
    const updatedProfile = {
      name: this.name,
      country: this.country,
      email: this.email,
    };

    this.profileService.updateUserData(updatedProfile).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
