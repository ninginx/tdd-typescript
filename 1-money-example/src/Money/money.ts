import { Sum } from "./sum";
import { Bank } from "./bank";

export interface Expression {
  reduce: (bank :Bank, to: string) => Money
  plus: (addend: Expression) => Expression
  equals: (exp: Expression) => boolean
  times: (multiplier: number) => Expression
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
  equals = (exp: Expression): boolean => {
    // cast変換無くせないの？？？
    const money = exp as Money;
    return this.amount === money.amount && this.currency === money.currency;
  };

  times = (multiplier: number): Expression => {
    return new Money(multiplier * this.amount, this.currency);
  };

  plus = (addend: Expression): Expression =>{
    return new Sum(this, addend);
  }

  myCurrency = (): string => {
    return this.currency;
  };

  public reduce = (bank: Bank, to: string): Money => {
    //return this;
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }  
}
