import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Calculation } from '../model/calculation';
import { CalculationResult } from '../model/calculation-result';
import { Operator } from '../model/operator.enum';
import { CalculationHistoryService } from './calculation-history.service';

@Injectable({
  providedIn: 'root'
})
export class CalculationAlignmentService {
  calculations: Array<Calculation> = [];

  constructor(
    private http: HttpClient,
    private calculationHistoryService: CalculationHistoryService
    ) { 

  }

  addToAlignment(calculation) {
    this.calculations.push(calculation);
  }

  getAlignment() {
    return this.calculations;
  }

  public sendCalculations(): void {
    this.http.post<Array<CalculationResult>>(environment.apiUrl+"/calculations", this.calculations).subscribe(calculationHistory=>{
      this.calculationHistoryService.addCalculationResults(calculationHistory)
    })
  }

  clearAlignment() {
    this.calculations.splice(0,this.calculations.length)
    return this.calculations;
  }

}
