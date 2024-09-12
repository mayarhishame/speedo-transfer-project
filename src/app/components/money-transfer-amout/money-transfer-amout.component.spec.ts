import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferAmoutComponent } from './money-transfer-amout.component';

describe('MoneyTransferAmoutComponent', () => {
  let component: MoneyTransferAmoutComponent;
  let fixture: ComponentFixture<MoneyTransferAmoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyTransferAmoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneyTransferAmoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
