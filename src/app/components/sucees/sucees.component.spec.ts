import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuceesComponent } from './sucees.component';

describe('SuceesComponent', () => {
  let component: SuceesComponent;
  let fixture: ComponentFixture<SuceesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuceesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuceesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
