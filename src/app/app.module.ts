import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculationFormComponent } from './component/calculation-form/calculation-form.component';
import { CalculationAlignmentComponent } from './component/calculation-alignment/calculation-alignment.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OperatorPipe } from './pipe/operation-name-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculationFormComponent,
    CalculationAlignmentComponent,
    OperatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
