import { TestBed } from '@angular/core/testing';
import { asapScheduler, of, scheduled } from 'rxjs';
import { Calculation } from '../model/calculation';
import { CalculationResult } from '../model/calculation-result';
import { Operator } from '../model/operator.enum';

import { CalculationAlignmentService } from './calculation-alignment.service';

describe('CalculationAlignmentService', () => {
  let service: CalculationAlignmentService;
  let mockHttpClient;

  beforeEach(() => {
    mockHttpClient = new MockHttpClient();
    service = new CalculationAlignmentService(mockHttpClient);
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
    service.sendCalculations().subscribe(calculationResults=>{
      expect(calculationResults.length).toBe(2);
    })
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
