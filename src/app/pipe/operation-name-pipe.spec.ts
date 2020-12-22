import { Operator } from "../model/operator.enum";
import { OperatorPipe } from "./operation-name-pipe"

describe('operation-name-pipe', ()=>{
  let operatorPipe: OperatorPipe;

  beforeAll(()=>{
    operatorPipe = new OperatorPipe();
  })
  it('should give operators a character', () => {
    expect(operatorPipe.transform(Operator.SUBSTRACTION)).toBe("-")
    expect(operatorPipe.transform(Operator.ADDITION)).toBe("+")
    expect(operatorPipe.transform(Operator.MULTIPLICATION)).toBe("*")
    expect(operatorPipe.transform(Operator.DIVISION)).toBe("/")
  });
})