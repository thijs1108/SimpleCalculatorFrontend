import { Pipe, PipeTransform } from '@angular/core';
import { Operator } from '../model/operator.enum';

@Pipe({name: 'operatorShort'})
export class OperatorPipe implements PipeTransform {
  transform(value: Operator): string {
    switch(value){
      case Operator.ADDITION:
        return "+";
      case Operator.SUBSTRACTION:
        return "-";
      case Operator.MULTIPLICATION:
        return "*"
      case Operator.DIVISION:
        return "/"
    }
  }
}