import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';

import { AuthFooterComponent } from '../auth-footer/auth-footer.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    AuthFooterComponent,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [AuthenticationService],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  years: number[] = [];

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.generateYears();
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryId: ['', Validators.required],
      day: ['', [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      month: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/),
        ],
      ],
    });
  }

  submit() {
    if (this.registerForm.invalid) {
      // Handle form validation errors
      return;
    }

    const formData = this.registerForm.value;

    const monthMap: { [key: string]: string } = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };

    const month = monthMap[formData.month] || '01';
    const day = formData.day.padStart(2, '0');
    const year = formData.year;

    const dateOfBirth = `${year}-${month}-${day}`;

    console.log('Sending data:', {
      name: formData.fName,
      country: formData.countryId,
      email: formData.email,
      password: formData.password,
      dateOfBirth: dateOfBirth,
    });

    this.authService
      .register({
        name: formData.fName,
        country: formData.countryId,
        email: formData.email,
        password: formData.password,
        dateOfBirth: dateOfBirth,
      })
      .subscribe(
        (res) => {
          console.log('Response:', res);
          alert('Form has been submitted.');
        },
        (err) => {
          console.log('Error:', err);
        }
      );
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year);
    }
  }

  openLogin(): void {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent, {
      width: '1440px',
    });
  }

  close(): void {
    this.dialog.closeAll();
  }
}
