import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculationResult } from 'src/app/model/calculation-result';
import { CalculationHistoryService } from 'src/app/service/calculation-history.service';

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.css']
})
export class CalculationHistoryComponent implements OnInit {

  calculationHistory: Array<CalculationResult>
  $calculationResultsSubj: BehaviorSubject<Array<CalculationResult>>

  constructor(
    private calculationHistoryService: CalculationHistoryService
  ) { }

  ngOnInit(): void {
    this.$calculationResultsSubj = this.calculationHistoryService.getCalculationHistory()
    this.$calculationResultsSubj.subscribe(calculationHistory=>{
      this.calculationHistory = calculationHistory;
    })
  }

}
