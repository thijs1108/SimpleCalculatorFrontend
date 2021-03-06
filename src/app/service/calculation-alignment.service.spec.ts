import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { asapScheduler, Observable, of, scheduled } from 'rxjs';
import { Calculation } from '../model/calculation';
import { CalculationResult } from '../model/calculation-result';
import { Operator } from '../model/operator.enum';

import { CalculationAlignmentService } from './calculation-alignment.service';
import { CalculationHistoryService } from './calculation-history.service';

describe('CalculationAlignmentService', () => {
  let service: CalculationAlignmentService;
  let mockHttpClient;
  let mockCalculationHistoryService: MockCalculationHistoryService;

  beforeEach(() => {
    mockHttpClient = new MockHttpClient();
    mockCalculationHistoryService = new MockCalculationHistoryService(mockHttpClient)
    service = new CalculationAlignmentService(mockHttpClient, mockCalculationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to add calculations', () => {
    let calculation: Calculation = {firstNumber: 1, secondNumber: 2, operator: Operator.ADDITION}
    service.addToAlignment(calculation);
    expect(service.getAlignment()).toEqual([calculation])
  })

  it('should be able to send calculations', () => {
    spyOn(mockHttpClient, "post").and.callThrough()
    service.sendCalculations()
    expect(mockHttpClient.post).toHaveBeenCalled()
  })

  it('should be able to clear calculations', () => {
    let calculation: Calculation = {firstNumber: 1, secondNumber: 2, operator: Operator.ADDITION}
    service.addToAlignment(calculation);
    let calculations = service.getAlignment();
    service.clearAlignment()
    expect(calculations).toEqual([])
  })
});


class MockHttpClient {
  calculationResults: CalculationResult[] = [
    {firstNumber: 1, secondNumber: 2, operator: Operator.ADDITION, result: 3.0},
    {firstNumber: 2, secondNumber: 4, operator: Operator.MULTIPLICATION, result: 5.0}
  ];
  get(id) {
    return of(this.calculationResults);
  }
  post(){
    return of(this.calculationResults);
  }
}
class MockCalculationHistoryService extends CalculationHistoryService{
  $calculationResultsSubj;
  getCalculationHistory;
  addCalculationResults(calculationHistory): Observable<Array<CalculationResult>> { return of([])}
}