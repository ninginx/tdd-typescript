import { Bank } from "./bank";
import { Money, Expression } from "./money"

export class Sum implements Expression{
  public augend: Money;
  public addend: Money;
  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce =(_bank: Bank, to: string): Money => {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}