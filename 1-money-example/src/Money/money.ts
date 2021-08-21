export class Money {
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
  equals = ({ amount, currency }: Money): boolean => {
    return this.amount === amount && this.currency === currency;
  };

  times = (multiplier: number): Money => {
    return new Money(multiplier * this.amount, this.currency);
  };

  myCurrency = (): string => {
    return this.currency;
  };
}

export class Dollar extends Money {
  constructor(amount: number,currency: string) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(amount: number, currency: string ) {
    super(amount, currency);
  }
}
