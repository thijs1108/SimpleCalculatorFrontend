import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Calculation } from 'src/app/model/calculation';
import { Operator } from 'src/app/model/operator.enum';
import { CalculationAlignmentService } from 'src/app/service/calculation-alignment.service';

import { CalculationFormComponent } from './calculation-form.component';

describe('CalculationFormComponent', () => {
  let component: CalculationFormComponent;
  let fixture: ComponentFixture<CalculationFormComponent>;
  let alignmentService: MockAlignmentService;

  beforeEach(async(() => {
    alignmentService = new MockAlignmentService();
    TestBed.configureTestingModule({
      declarations: [ CalculationFormComponent ],
      providers: [
        FormBuilder,
        {
          provide: CalculationAlignmentService,
          useValue: alignmentService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit should call alignmentService',()=>{
    spyOn(alignmentService, "addToAlignment");
    component.onSubmit({})
    expect(alignmentService.addToAlignment).toHaveBeenCalled()
  })

});

class MockAlignmentService{
  calculations: Array<Calculation> = [
    {firstNumber: 1, secondNumber: 2, operator: Operator.ADDITION},
    {firstNumber: 3, secondNumber: 5, operator: Operator.DIVISION},
  ]
  sendCalculations() {}
  getAlignment() {return this.calculations}
  addToAlignment() {}
}
