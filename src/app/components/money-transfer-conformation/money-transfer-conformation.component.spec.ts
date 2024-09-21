import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferConformationComponent } from './money-transfer-conformation.component';

describe('MoneyTransferConformationComponent', () => {
  let component: MoneyTransferConformationComponent;
  let fixture: ComponentFixture<MoneyTransferConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferConformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyTransferConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
