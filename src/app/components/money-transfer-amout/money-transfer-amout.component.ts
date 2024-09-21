import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { DownloadMobileAppComponent } from '../download-mobile-app/download-mobile-app.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-money-transfer-amout',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent,
    DownloadMobileAppComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './money-transfer-amout.component.html',
  styleUrls: ['./money-transfer-amout.component.scss'],
})
export class MoneyTransferAmoutComponent {
  amount: number = 0;
  recipientName: string = '';
  recipientAccount: string = '';

  constructor(private router: Router) {}

  continue() {
    localStorage.setItem('amount', this.amount.toString());
    localStorage.setItem('recipientName', this.recipientName);
    localStorage.setItem('recipientAccount', this.recipientAccount);
    this.router.navigate(['/money-transfer-confirmation']);
  }
}
