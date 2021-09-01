import { Sum } from "./sum";

export interface Expression {
  reduce: (to: string) => Money
}

export class Money implements Expression {
  public amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar = (amount: number): Money => {
    return new Money(amount,'USD');
  };

  static franc = (amount: number): Money => {
    return new Money(amount,'CHF');
  };
  equals = ({ amount, currency }: Money): boolean => {
    return this.amount === amount && this.currency === currency;
  };

  times = (multiplier: number): Money => {
    return new Money(multiplier * this.amount, this.currency);
  };

  plus = (addend: Money): Expression =>{
    return new Sum(this,addend);
  }

  myCurrency = (): string => {
    return this.currency;
  };

  public reduce = (_to: string): Money => {
    return this;
  }  
}
