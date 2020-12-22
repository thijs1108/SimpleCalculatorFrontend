import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Calculation } from '../model/calculation';
import { CalculationResult } from '../model/calculation-result';
import { Operator } from '../model/operator.enum';

@Injectable({
  providedIn: 'root'
})
export class CalculationAlignmentService {
  calculations: Array<Calculation> = [];


  constructor(private http: HttpClient) { 

  }

  addToAlignment(calculation) {
    this.calculations.push(calculation);
  }

  getAlignment() {
    return this.calculations;
  }

  public sendCalculations(): Observable<Array<CalculationResult>>{
    return this.http.post<Array<CalculationResult>>(environment.apiUrl+"/calculations", this.calculations)
  }

  clearAlignment() {
    this.calculations = [];
    return this.calculations;
  }

}
