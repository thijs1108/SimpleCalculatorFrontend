import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { off } from 'process';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Calculation } from '../model/calculation';
import { CalculationResult } from '../model/calculation-result';

@Injectable({
  providedIn: 'root'
})
export class CalculationHistoryService {

  $calculationResultsSubj: BehaviorSubject<Array<CalculationResult>> = new BehaviorSubject(null)

  constructor(private http: HttpClient) { }

  addCalculationResults(calculationResults: Array<CalculationResult>){
    let currentHistory: Array<CalculationResult> = this.$calculationResultsSubj.value
    calculationResults.push(...currentHistory)
    this.$calculationResultsSubj.next(calculationResults)
  }

  getCalculationHistory(): BehaviorSubject<Array<CalculationResult>> {
    this.http.get<Array<CalculationResult>>(environment.apiUrl+"/calculations").subscribe(calculationHistory=>{
      this.$calculationResultsSubj.next(calculationHistory.reverse());
    })
    return this.$calculationResultsSubj;
  }

}
