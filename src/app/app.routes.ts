import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { PaymentsHistoryComponent } from './components/payments-history/payments-history.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'profile',
    component: MyProfileComponent,
  },
  {
    path: 'paymentHistory',
    component: PaymentsHistoryComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
