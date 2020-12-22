import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CalculationResult } from 'src/app/model/calculation-result';
import { Operator } from 'src/app/model/operator.enum';
import { OperatorPipe } from 'src/app/pipe/operation-name-pipe';
import { CalculationHistoryService } from 'src/app/service/calculation-history.service';

import { CalculationHistoryComponent } from './calculation-history.component';

describe('CalculationHistoryComponent', () => {
  let component: CalculationHistoryComponent;
  let fixture: ComponentFixture<CalculationHistoryComponent>;
  let historyService: MockCalculationHistoryService

  beforeEach(async(() => {
    historyService = new MockCalculationHistoryService()
    TestBed.configureTestingModule({
      declarations: [ CalculationHistoryComponent, OperatorPipe ],
      providers: [
        {
          provide: CalculationHistoryService,
          useValue: historyService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockCalculationHistoryService{
  calculationHistory: Array<CalculationResult> = [
    {firstNumber: 1, secondNumber: 2, operator: Operator.ADDITION, result: 5.0},
    {firstNumber: 3, secondNumber: 5, operator: Operator.DIVISION, result: 10.0},
  ]
  getCalculationHistory() {return of(this.calculationHistory)}
}