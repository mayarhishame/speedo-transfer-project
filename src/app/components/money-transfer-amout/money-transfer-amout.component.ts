import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-money-transfer-amout',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './money-transfer-amout.component.html',
  styleUrls: ['./money-transfer-amout.component.scss'],
})
export class MoneyTransferAmoutComponent {
  // Injecting FormBuilder for reactive forms
  private _formBuilder = inject(FormBuilder);

  // Define the form group and form controls
  transferForm: FormGroup = this._formBuilder.group({
    amount: ['', Validators.required],
    recipientName: ['', Validators.required],
    toAccountNumber: ['', Validators.required],
  });
  alert: any;

  constructor(private router: Router) {
    console.log('Form initialized:', this.transferForm);
  }

  // Function to navigate to the confirmation page
  navigateToConfirmComponent() {
    if (this.transferForm.invalid) {
      this.transferForm.markAllAsTouched(); // Mark all controls as touched to show validation errors
      return;
    }

    // Form is valid, proceed with navigation
    const formData = this.transferForm.value;
    localStorage.setItem('transferData', JSON.stringify(formData));
    this.router.navigate(['/money-transfer-confirmation']);
  }
}
