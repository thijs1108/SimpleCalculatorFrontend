import { Component, OnInit } from '@angular/core';
import { Calculation } from '../../model/calculation';
import { CalculationAlignmentService } from '../../service/calculation-alignment.service';

@Component({
  selector: 'calculation-alignment',
  templateUrl: './calculation-alignment.component.html',
  styleUrls: ['./calculation-alignment.component.css']
})
export class CalculationAlignmentComponent implements OnInit {
  calculations: Array<Calculation>;

  constructor(
    private alignmentService: CalculationAlignmentService
  ) { }

  ngOnInit(): void {
    this.calculations = this.alignmentService.getAlignment();
  }

  onClick(): void {
    this.alignmentService.sendCalculations()
    this.alignmentService.clearAlignment() 
  }

}
