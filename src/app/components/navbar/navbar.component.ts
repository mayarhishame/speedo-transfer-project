import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.isLogged = !!localStorage.getItem('authToken');
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  openRegister(): void {
    this.dialog.open(RegisterComponent, {
      width: '1440px',
    });
  }

  openLogin(): void {
    this.dialog.open(LoginComponent, {
      width: '1440px',
    });
  }
}
