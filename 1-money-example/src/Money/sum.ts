import { Bank } from "./bank";
import { Money, Expression } from "./money"

export class Sum implements Expression{
  public augend: Expression;
  public addend: Expression;
  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce =(bank: Bank, to: string): Money => {
    const amount = this.augend.reduce(bank,to).amount + this.addend.reduce(bank,to).amount;
    return new Money(amount, to);
  }

  public plus = (addend: Expression): Expression => {
    return new Sum(this, addend);
  }
  
  equals = (_exp: Expression): boolean => {
    return true
  }

  times = (multiplier: number): Expression => {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }
}