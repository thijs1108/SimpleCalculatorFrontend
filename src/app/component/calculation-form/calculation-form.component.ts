import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Operator } from 'src/app/model/operator.enum';
import { CalculationAlignmentService } from 'src/app/service/calculation-alignment.service';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.css']
})
export class CalculationFormComponent implements OnInit {

  calculationForm

  constructor(
    private calculationAlignmentService: CalculationAlignmentService,
    private formbuilder: FormBuilder
  ) { 
    this.calculationForm = this.formbuilder.group({
      firstNumber: 1,
      secondNumber: 1,
      operator: Operator.ADDITION
    })
  }

  ngOnInit(): void {
  }

  onSubmit(calculation): void {
    this.calculationAlignmentService.addToAlignment(calculation);
  }

}
