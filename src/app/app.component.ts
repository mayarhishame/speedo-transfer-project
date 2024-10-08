import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SessionManagementService } from '../core/services/session-management.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
  constructor(private SessionManagementService: SessionManagementService) {}

  ngOnInit(): void {
    this.SessionManagementService.startInactivityTimer();
  }
}
