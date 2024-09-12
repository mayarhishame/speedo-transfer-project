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
      day: ['', [Validators.required, Validators.min(2), Validators.max(2)]],
      month: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(2), Validators.max(4)]],
      password: [
        '',
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/),
      ],
    });
  }

  submit() {
    if (this.registerForm.invalid) {
      // Handle form validation errors
      return;
    }

    const formData = this.registerForm.value;

    // Map month to numeric value (01 for January, etc.)
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

    const month = monthMap[formData.month] || '01'; // Default to '01' if month is not found
    const day = formData.day.padStart(2, '0'); // Ensure day is two digits
    const year = formData.year;

    const dateOfBirth = `${year}-${month}-${day}`;

    // Log the data for debugging
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
          alert('Form has been submitted..');
        },
        (err) => {
          console.log('Error:', err);
          // You may want to display an error message to the user
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
