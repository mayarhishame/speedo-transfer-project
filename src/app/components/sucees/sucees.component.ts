import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucees',
  standalone: true,
  imports: [],
  templateUrl: './sucees.component.html',
  styleUrl: './sucees.component.scss',
})
export class SuceesComponent {
  transferData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('transferData');
    this.transferData = data ? JSON.parse(data) : {};
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
