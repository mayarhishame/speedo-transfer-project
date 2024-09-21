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
  monthMap: { [key: string]: string } = {
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
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.generateYears();
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      day: ['', [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      month: ['', Validators.required],
      dateOfBirth: [''],
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
    if (this.registerForm.invalid) return;

    const month = this.monthMap[this.registerForm.get('month')?.value] || '01';
    const day = this.registerForm.get('day')?.value.padStart(2, '0');

    this.registerForm
      .get('dateOfBirth')
      ?.setValue(`${this.registerForm.get('year')?.value}-${month}-${day}`);

    this.authService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.close();
        alert('Form has been submitted.');
      },
      error: (err) => console.log('Error:', err),
    });
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
