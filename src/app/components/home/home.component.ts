import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DownloadMobileAppComponent } from '../download-mobile-app/download-mobile-app.component';
import { FooterComponent } from '../footer/footer.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AfterLoginComponent } from '../after-login/after-login.component';
import { BeforeLoginComponent } from '../before-login/before-login.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    DownloadMobileAppComponent,
    GetStartedComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    AfterLoginComponent,
    BeforeLoginComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
