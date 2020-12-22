import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CalculationResult } from '../model/calculation-result';
import { Operator } from '../model/operator.enum';

import { CalculationHistoryService } from './calculation-history.service';

describe('CalculationHisotryService', () => {
  let service: CalculationHistoryService;
  let mockHttpClient;

  beforeEach(() => {
    mockHttpClient = new MockHttpClient();
    service = new CalculationHistoryService(mockHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get caculation history', () =>{
    expect(service.getCalculationHistory().value.length).toBe(2);
  })

  it('should be able to add calculations to history',()=>{
    let $calculationHistory = service.getCalculationHistory();
    service.addCalculationResults([{firstNumber: 10, secondNumber: 20, operator: Operator.ADDITION, result: 30.0}])
    expect($calculationHistory.value.length).toBe(3);
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