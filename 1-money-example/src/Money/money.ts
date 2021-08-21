export abstract class Money {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar = (amount: number): Money => {
    return new Dollar(amount,'USD');
  };

  static franc = (amount: number): Money => {
    return new Franc(amount,'CHF');
  };
  equals = ({ amount, constructor }: Money): boolean => {
    return this.amount === amount && this.constructor.name === constructor.name;
  };

  abstract times(multiplier: number): Money;

  myCurrency = (): string => {
    return this.currency;
  };
}

export class Dollar extends Money {
  constructor(amount: number,currency: string) {
    super(amount, currency);
  }
  times = (multiplier: number): Dollar => {
    return Money.dollar(this.amount*multiplier);
  };
}

export class Franc extends Money {
  constructor(amount: number, currency: string ) {
    super(amount, currency);
  }
  times = (multiplier: number): Dollar => {
    return Money.franc(multiplier * this.amount);
  };
}
