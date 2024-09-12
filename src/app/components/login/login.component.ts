import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthenticationService],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(
    private authService: AuthenticationService,
    public dialog: MatDialog
  ) {}

  close(): void {
    this.dialog.closeAll();
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    const loginPayload = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(loginPayload).subscribe({
      next: (response: any) => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.id.toString());
        console.log('Login successful!');
        console.log('Token:', response.token);
        console.log('User ID:', response.id);
      },
      error: (error) => {
        console.error('Login failed', error);
        console.error(
          'Error details:',
          error.message,
          error.status,
          error.statusText
        );
      },
    });
  }
}
