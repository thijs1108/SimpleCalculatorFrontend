import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Calculation } from 'src/app/model/calculation';
import { Operator } from 'src/app/model/operator.enum';
import { OperatorPipe } from 'src/app/pipe/operation-name-pipe';
import { CalculationAlignmentService } from 'src/app/service/calculation-alignment.service';

import { CalculationAlignmentComponent } from './calculation-alignment.component';

describe('CalculationAlignmentComponent', () => {
  let component: CalculationAlignmentComponent;
  let fixture: ComponentFixture<CalculationAlignmentComponent>;
  let alignmentService: MockAlignmentService

  beforeEach(async(() => {
    alignmentService = new MockAlignmentService();

    TestBed.configureTestingModule({
      declarations: [ CalculationAlignmentComponent, OperatorPipe ],
      providers: [
        {
          provide: CalculationAlignmentService,
          useValue: alignmentService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to send calculations', ()=>{
    spyOn(alignmentService, "sendCalculations").and.callThrough()
    spyOn(alignmentService, "clearAlignment").and.callThrough()
    component.onClick()
    expect(alignmentService.sendCalculations).toHaveBeenCalled()
    expect(alignmentService.clearAlignment).toHaveBeenCalled()
  })
});

class MockAlignmentService{
  calculations: Array<Calculation> = [
    {firstNumber: 1, secondNumber: 2, operator: Operator.ADDITION},
    {firstNumber: 3, secondNumber: 5, operator: Operator.DIVISION},
  ]
  sendCalculations() {}
  clearAlignment(){}
  getAlignment() {return this.calculations}
}