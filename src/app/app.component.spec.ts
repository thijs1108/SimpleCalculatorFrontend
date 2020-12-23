import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculationAlignmentComponent } from './component/calculation-alignment/calculation-alignment.component';
import { CalculationFormComponent } from './component/calculation-form/calculation-form.component';
import { CalculationHistoryComponent } from './component/calculation-history/calculation-history.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockCalculationAlignmentComponent,
        MockCalculationHistoryComponent,
        MockCalculationFormComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'simplecalculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('simplecalculator');
  });

});

@Component({
  selector: "calculation-alignment",
  template: "",
})
class MockCalculationAlignmentComponent {}

@Component({
  selector: "app-calculation-form",
  template: "",
})
class MockCalculationHistoryComponent {}

@Component({
  selector: "app-calculation-history",
  template: "",
})
class MockCalculationFormComponent {}
