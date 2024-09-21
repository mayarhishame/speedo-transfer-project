import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-app-help',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './app-help.component.html',
  styleUrl: './app-help.component.scss',
})
export class AppHelpComponent {}
